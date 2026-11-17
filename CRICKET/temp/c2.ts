let myTarget = 1500;

class Player {
  name: string;
  isBatsman: boolean;
  isHomeTeam: boolean;
  runs: number;
  ballsFaced: number;
  isOut: boolean;
  team: Object;
  lastBallRuns: number;

  constructor(
    name: string,
    isBatsman: boolean,
    isHomeTeam: boolean = false,
    team: Object,
  ) {
    this.name = name;
    this.isBatsman = isBatsman;
    this.isHomeTeam = isHomeTeam;
    this.runs = 0;
    this.ballsFaced = 0;
    this.isOut = false;
    this.team = team;
    this.lastBallRuns = 0;
  }

  async bat(): Promise<void> {
    if (this.isBatsman) {
      const runOptions = [0, 1, 2, 3, 4, 6];
      const probabilities = [75, 14, 5, 0.2, 3.6, 2.2];

      const randomPick = Math.random() * 100;

      let cumulativeProbability = 0;

      for (let i = 0; i < runOptions.length; i++) {
        cumulativeProbability += probabilities[i];

        if (randomPick < cumulativeProbability) {
          this.lastBallRuns = runOptions[i];
          this.runs += runOptions[i];
          break;
        }
      }

      let FOW = this.isHomeTeam ? 0.011 : 0.011;

      if (Math.random() < FOW) {
        this.isOut = true;
        console.log(`${this.name} is OUT! ❌`);
      }

      if ((this as any).team["wickets"] > 8) {
        if (Math.random() < 0.02) {
          this.isOut = true;
          console.log(`${this.name} is OUT! ❌`);
        }
      }

      this.ballsFaced++;

      console.log(
        `${this.name} faces ${this.ballsFaced} balls and scores ${
          this.lastBallRuns === 4
            ? "✅ 4"
            : this.lastBallRuns === 6
              ? "✅ 6"
              : this.lastBallRuns
        } runs.`,
      );
    }
  }

  getTotalScore(): string {
    return `${this.name}: ${this.runs} runs Of ${this.ballsFaced} ball`;
  }

  getBallFaced(): String {
    return `${this.ballsFaced}`;
  }
}

class Team {
  name: string;
  players: Player[] = [];
  totalRuns: number;
  wickets: number;
  overs: number;
  battingOrder: number;
  indivisualScore = 0;

  constructor(name: string) {
    this.name = name;
    this.totalRuns = 0;
    this.wickets = 0;
    this.overs = 0;
    this.battingOrder = 0;
    this.indivisualScore = 0;
  }

  getRunRate(overs: number, runs: number): string {
    if (overs <= 0) {
      return "0";
    }

    const runRate = runs / overs;
    return runRate.toFixed(2);
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  showStatus() {
    let completedOvers = Math.floor(this.overs);
    let ballsInCurrentOver = Math.floor((this.overs % 1) * 6);
    let currentOver = `${completedOvers}.${ballsInCurrentOver}`;

    console.log(`\n${this.name}'s Current Status:`);

    console.log(
      `Total Runs: ${this.totalRuns}, Wickets: ${
        this.wickets
      }, Overs: ${currentOver}, Run Rate: ${this.getRunRate(
        Number(currentOver),
        this.totalRuns,
      )}`,
    );
  }

  async batInInnings(
    target: number,
    isSecondInnings: boolean,
  ): Promise<boolean> {
    let overRuns: number = 0;
    let ballCountInOver: number = 0;

    let strikerIndex = 0;
    let nonStrikerIndex = 1;
    let nextBatsmanIndex = 2;

    while (nextBatsmanIndex <= this.players.length && this.wickets < 10) {
      let striker = this.players[strikerIndex];
      let nonStriker = this.players[nonStrikerIndex];

      console.log(`Bowler bowls to ${striker.name}...`);

      await new Promise((resolve) => setTimeout(resolve, 15000));

      await striker.bat();

      console.log(striker.getTotalScore());

      this.totalRuns += striker.lastBallRuns;

      overRuns += striker.lastBallRuns;

      console.log(
        `${striker.name} (striker) - ${striker.runs} (${striker.ballsFaced}) | ${nonStriker.name} (non-striker) - ${nonStriker.runs} (${nonStriker.ballsFaced}) || Total Score: ${this.totalRuns}/${this.wickets} || Overs: (${this.overs})`,
      );

      console.log("#################################################");

      if (striker.isOut) {
        this.wickets++;

        if (nextBatsmanIndex < this.players.length) {
          strikerIndex = nextBatsmanIndex;
          nextBatsmanIndex++;

          console.log(`${this.players[strikerIndex].name} is the new striker.`);
        } else {
          break;
        }
      } else {
        if (striker.lastBallRuns === 1 || striker.lastBallRuns === 3) {
          let temp = strikerIndex;
          strikerIndex = nonStrikerIndex;
          nonStrikerIndex = temp;
        }
      }

      if (!striker.isOut && !nonStriker.isOut && Math.random() < 0.0045) {
        nonStriker.isOut = true;

        console.log(`${nonStriker.name} is OUT while running! ❌`);

        this.wickets++;

        if (nextBatsmanIndex < this.players.length) {
          nonStrikerIndex = nextBatsmanIndex;

          console.log(
            `${this.players[nonStrikerIndex].name} is the new non-striker.`,
          );

          nextBatsmanIndex++;
        } else {
          break;
        }
      }

      ballCountInOver++;

      if (this.totalRuns > target) {
        console.log(`${this.name} has reached the target! 😁`);
        return true;
      }

      if (ballCountInOver === 6) {
        this.overs += 1;

        console.log(`Over completed. Runs in this over: ${overRuns}`);

        overRuns = 0;
        ballCountInOver = 0;

        let temp = strikerIndex;
        strikerIndex = nonStrikerIndex;
        nonStrikerIndex = temp;

        this.showStatus();

        if (isSecondInnings) {
          console.log(
            `---------------------Target score: ${target} runs & ${
              target - this.totalRuns
            } need's to win ---------------------`,
          );
        }

        //Wait for 18 seconds while over completed
        await new Promise((resolve) => setTimeout(resolve, 18000));
      }
    }

    console.log(
      `${this.name} innings completed. Total Runs: ${this.totalRuns}, Wickets: ${this.wickets}`,
    );

    this.showStatus();

    return false;
  }

  async simulateBall(striker: Player, nonStriker: Player) {
    console.log(`Bowler bowls to ${striker.name}...`);

    await new Promise((resolve) => setTimeout(resolve, 15000)); // Simulate 15 second per ball

    await striker.bat();

    console.log(striker.getTotalScore());

    if (striker.lastBallRuns === 1) {
      let temp = striker;
      striker = nonStriker;
      nonStriker = temp;
    }

    if (Math.random() < 0.0045) {
      nonStriker.isOut = true;
      console.log(`${nonStriker.name} is OUT while running! ❌`);
    }
  }
}

class Match {
  Australia: Team;
  SouthAfrica: Team;
  totalOvers: number;
  maxBallsPerDay: number;
  days: number;
  targetScore: number;

  constructor(targetScore: number) {
    this.Australia = new Team("Australia");
    this.SouthAfrica = new Team("SouthAfrica");
    this.totalOvers = 90 * 5;
    this.maxBallsPerDay = 90 * 6;
    this.days = 5;
    this.targetScore = targetScore;
  }

  createTeam(teamName: string, isAustralia: boolean) {
    const australiaBatsmen = [
      "Usman Khawaja",
      "Jake Weatherald",
      "Marnus Labuschagne",
      "Steve Smith",
      "Travis Head",
      "Cameron Green",
      "Alex Carey",
      "Mitchell Starc",
      "Nathan Lyon",
      "Brendan Doggett",
      "Scott Boland",
    ];

    const southAfricaBatsmen = [
      "Aiden Markram",
      "Tony de Zorzi",
      "David Bedingham",
      "Temba Bavuma",
      "Ryan Rickelton",
      "Tristan Stubbs",
      "Kyle Verreynne",
      "Wiaan Mulder",
      "Marco Jansen",
      "Kagiso Rabada",
      "Corbin Bosch",
    ];

    const team = isAustralia ? this.Australia : this.SouthAfrica;

    const batsmenNames = isAustralia ? australiaBatsmen : southAfricaBatsmen;

    batsmenNames.forEach((name) => {
      let batsman = new Player(name, true, isAustralia, team);
      team.addPlayer(batsman);
    });

    return team;
  }

  async playMatch() {
    this.createTeam("Australia", true);
    this.createTeam("SouthAfrica", false);

    for (let day = 1; day <= this.days; day++) {
      console.log(`\nDay ${day} - Australia bats`);

      console.log(`Australia's First Innings`);

      let AustraliaFinished = await this.Australia.batInInnings(
        this.Australia.totalRuns ? this.Australia.totalRuns : this.targetScore,
        false,
      );

      if (AustraliaFinished) {
        console.log("Australia has reached the target, match ends!");
        break;
      }

      console.log(`SouthAfrica's First Innings`);

      let SouthAfricaFinished = await this.SouthAfrica.batInInnings(
        this.Australia.totalRuns ? this.Australia.totalRuns : this.targetScore,
        true,
      );

      if (SouthAfricaFinished) {
        console.log("SouthAfrica has reached the target, match ends!");
        break;
      }

      console.log(`Australia's Second Innings`);
      await this.Australia.batInInnings(this.targetScore, true);

      console.log(`SouthAfrica's Second Innings`);
      await this.SouthAfrica.batInInnings(this.targetScore, true);
    }

    this.getResult();
  }

  getResult() {
    console.log("Match Results:");

    if (this.Australia.totalRuns > this.SouthAfrica.totalRuns) {
      console.log(
        `Congratulations Australia won by ${
          this.Australia.totalRuns - this.SouthAfrica.totalRuns
        } runs`,
      );
    } else if (this.SouthAfrica.totalRuns > this.Australia.totalRuns) {
      console.log(
        `Congratulations SouthAfrica won by ${
          10 - this.SouthAfrica.wickets
        } wickets`,
      );
    } else {
      console.log("It's a draw.");
    }

    console.log(
      `Australia's Final Score: ${this.Australia.totalRuns} Runs, Wickets: ${this.Australia.wickets} (${this.Australia.overs} Overs)`,
    );

    console.log(
      `SouthAfrica's Final Score: ${this.SouthAfrica.totalRuns} Runs, Wickets: ${this.SouthAfrica.wickets} (${this.SouthAfrica.overs} Overs)`,
    );
  }
}

const match = new Match(myTarget);

match.playMatch().then(() => {
  console.log("\n========== AUSTRALIA SCORECARD ==========\n");

  match.Australia.players.forEach((player) => {
    console.log(
      `${player.name} - ${player.runs} (${player.ballsFaced}) ${
        player.isOut ? "OUT" : "NOT OUT"
      }`,
    );
  });

  console.log("\n========== SOUTHAFRICA SCORECARD ==========\n");

  match.SouthAfrica.players.forEach((player) => {
    console.log(
      `${player.name} - ${player.runs} (${player.ballsFaced}) ${
        player.isOut ? "OUT" : "NOT OUT"
      }`,
    );
  });
});

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
      const probabilities = [72, 14, 5, 0.2, 5.6, 3.2];

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

      let FOW = this.isHomeTeam ? 0.012 : 0.014;

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
        `\x1b[1;33m🏏 ${this.name} • ${this.ballsFaced} balls • ${
          this.lastBallRuns === 4
            ? "⚡ FOUR"
            : this.lastBallRuns === 6
              ? "🚀 SIX"
              : `🔸 ${this.lastBallRuns} run`
        }\x1b[0m`,
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
  ballsBowled: number;

  constructor(name: string) {
    this.name = name;
    this.totalRuns = 0;
    this.wickets = 0;
    this.overs = 0;
    this.battingOrder = 0;
    this.indivisualScore = 0;
    this.ballsBowled = 0;
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
    let completedOvers = Math.floor(this.ballsBowled / 6);

    let ballsInCurrentOver = this.ballsBowled % 6;

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

  getOvers(): string {
    const overs = Math.floor(this.ballsBowled / 6);
    const balls = this.ballsBowled % 6;

    return `${overs}.${balls}`;
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
    let inningsBalls = 0;

    let wicketFellThisBall = false;

    let striker = this.players[strikerIndex];
    let nonStriker = this.players[nonStrikerIndex];

    while (nextBatsmanIndex <= this.players.length && this.wickets < 10) {
      console.log(`Bowler bowls to ${striker.name}...`);

      await new Promise((resolve) => setTimeout(resolve, 15000));

      await striker.bat();

      inningsBalls++;
      this.ballsBowled++;

      if (inningsBalls >= 750) {
        console.log("125 overs completed.");
        break;
      }

      // console.log(striker.getTotalScore());

      this.totalRuns += striker.lastBallRuns;

      overRuns += striker.lastBallRuns;

      console.table({
        StrikerName: `${striker.name} - ${striker.runs} (${striker.ballsFaced})`,
        NonStriker: `${nonStriker.name}- ${nonStriker.runs} (${nonStriker.ballsFaced})`,
        Score: `${this.totalRuns}/${this.wickets} ${this.getOvers()}`,
      });

      console.log("--------------------------------------------------");

      if (striker.isOut) {
        wicketFellThisBall = true;
        this.wickets++;

        if (nextBatsmanIndex < this.players.length) {
          strikerIndex = nextBatsmanIndex;
          nextBatsmanIndex++;

          console.log(`${this.players[strikerIndex].name} is the new striker.`);

          striker = this.players[strikerIndex];
          nonStriker = this.players[nonStrikerIndex];
        } else {
          break;
        }
      } else {
        if (striker.lastBallRuns === 1 || striker.lastBallRuns === 3) {
          let temp = strikerIndex;
          strikerIndex = nonStrikerIndex;
          nonStrikerIndex = temp;

          striker = this.players[strikerIndex];
          nonStriker = this.players[nonStrikerIndex];
        }
      }

      if (!striker.isOut && !nonStriker.isOut && Math.random() < 0.0045) {
        const strikerRunOut = Math.random() < 0.5;

        if (strikerRunOut) {
          striker.isOut = true;

          console.log(`${striker.name} is RUN OUT! ❌`);

          this.wickets++;

          if (nextBatsmanIndex < this.players.length) {
            strikerIndex = nextBatsmanIndex;

            console.log(
              `${this.players[strikerIndex].name} is the new striker.`,
            );

            nextBatsmanIndex++;
          } else {
            break;
          }
        } else {
          nonStriker.isOut = true;

          console.log(`${nonStriker.name} is RUN OUT! ❌`);

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

        striker = this.players[strikerIndex];
        nonStriker = this.players[nonStrikerIndex];
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

        if (!wicketFellThisBall) {
          let temp = strikerIndex;
          strikerIndex = nonStrikerIndex;
          nonStrikerIndex = temp;

          striker = this.players[strikerIndex];
          nonStriker = this.players[nonStrikerIndex];
        }

        wicketFellThisBall = false;

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

    // console.log(striker.getTotalScore());

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
  India: Team;
  Bangladesh: Team;
  totalOvers: number;
  maxBallsPerDay: number;
  days: number;
  targetScore: number;

  constructor(targetScore: number) {
    this.India = new Team("India");
    this.Bangladesh = new Team("Bangladesh");
    this.totalOvers = 90 * 5;
    this.maxBallsPerDay = 90 * 6;
    this.days = 5;
    this.targetScore = targetScore;
  }

  createTeam(teamName: string, isIndia: boolean) {
    const indiaBatsmen = [
      "Yashaswi Jaiswal",
      "KL Rahul",
      "Shubman Gill (c)",
      "Devdutt Padikkal",
      "Rishabh Pant",
      "Washington Sundar",
      "Dhruv Jurel",
      "Nitish Kumar Reddy",
      "Ravindra Jadeja",
      "Mohammed Siraj",
      "Jasprit Bumrah",
    ];

    const bangladeshBatsman = [
      "Shadman Islam",
      "Zakir Hasan",
      "Najmul Hossain Shanto",
      "Mominul Haque",
      "Mushfiqur Rahim",
      "Shakib Al Hasan",
      "Litton Das",
      "Mehidy Hasan Miraz",
      "Taskin Ahmed",
      "Hasan Mahmud",
      "Nahid Rana",
    ];

    const team = isIndia ? this.India : this.Bangladesh;

    const batsmenNames = isIndia ? indiaBatsmen : bangladeshBatsman;

    batsmenNames.forEach((name) => {
      let batsman = new Player(name, true, isIndia, team);
      team.addPlayer(batsman);
    });

    return team;
  }

  async playMatch() {
    this.createTeam("India", true);
    this.createTeam("Bangladesh", false);

    console.log(`India's First Innings`);

    await this.India.batInInnings(this.targetScore, false);

    console.log(`Bangladesh's First Innings`);

    await this.Bangladesh.batInInnings(this.India.totalRuns, true);

    this.getResult();
  }

  getResult() {
    console.log("Match Results:");

    if (this.India.totalRuns > this.Bangladesh.totalRuns) {
      console.log(
        `Congratulations India won by ${
          this.India.totalRuns - this.Bangladesh.totalRuns
        } runs`,
      );
    } else if (this.Bangladesh.totalRuns > this.India.totalRuns) {
      console.log(
        `Congratulations Bangladesh won by ${10 - this.Bangladesh.wickets} wickets`,
      );
    } else {
      console.log("It's a draw.");
    }

    console.log(
      `India's Final Score: ${this.India.totalRuns} Runs, Wickets: ${
        this.India.wickets
      } (${this.India.getOvers()} Overs) | Run Rate: ${this.India.getRunRate(
        Number(this.India.getOvers()),
        this.India.totalRuns,
      )}`,
    );

    console.log(
      `Bangladesh's Final Score: ${this.Bangladesh.totalRuns} Runs, Wickets: ${
        this.Bangladesh.wickets
      } (${this.Bangladesh.getOvers()} Overs) | Run Rate: ${this.Bangladesh.getRunRate(
        Number(this.Bangladesh.getOvers()),
        this.Bangladesh.totalRuns,
      )}`,
    );
  }
}

const match = new Match(myTarget);

match.playMatch().then(() => {
  console.log("\n========== India SCORECARD ==========\n");

  match.India.players.forEach((player) => {
    console.log(
      `${player.name} - ${player.runs} (${player.ballsFaced}) ${
        player.isOut ? "OUT" : "NOT OUT"
      }`,
    );
  });

  console.log("\n========== Bangladesh SCORECARD ==========\n");

  match.Bangladesh.players.forEach((player) => {
    console.log(
      `${player.name} - ${player.runs} (${player.ballsFaced}) ${
        player.isOut ? "OUT" : "NOT OUT"
      }`,
    );
  });
});

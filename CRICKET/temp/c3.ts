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

  firstInningsRuns: number;
  firstInningsBalls: number;

  secondInningsRuns: number;
  secondInningsBalls: number;

  currentInnings: number;

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

    this.firstInningsRuns = 0;
    this.firstInningsBalls = 0;

    this.secondInningsRuns = 0;
    this.secondInningsBalls = 0;

    this.currentInnings = 1;
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

          if (this.currentInnings === 1) {
            this.firstInningsRuns += runOptions[i];
          } else {
            this.secondInningsRuns += runOptions[i];
          }

          break;
        }
      }

      let FOW = this.isHomeTeam ? 0.031 : 0.031;

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

      if (this.currentInnings === 1) {
        this.firstInningsBalls++;
      } else {
        this.secondInningsBalls++;
      }

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
}

class Team {
  name: string;
  players: Player[] = [];

  totalRuns: number;
  inningsRuns: number;

  wickets: number;
  overs: number;

  battingOrder: number;

  constructor(name: string) {
    this.name = name;

    this.totalRuns = 0;
    this.inningsRuns = 0;

    this.wickets = 0;
    this.overs = 0;

    this.battingOrder = 0;
  }

  getRunRate(overs: number, runs: number): string {
    if (overs <= 0) {
      return "0";
    }

    return (runs / overs).toFixed(2);
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  showStatus(ballCountInOver: number) {
    console.log(`\n${this.name}'s Current Status:`);

    console.log(
      `Total Runs: ${this.inningsRuns}, Wickets: ${
        this.wickets
      }, Overs: ${this.overs}.${ballCountInOver}, Run Rate: ${this.getRunRate(
        this.overs || 1,
        this.inningsRuns,
      )}`,
    );
  }

  async batInInnings(
    target: number,
    isSecondInnings: boolean,
  ): Promise<boolean> {
    let overRuns = 0;
    let ballCountInOver = 0;

    let strikerIndex = 0;
    let nonStrikerIndex = 1;
    let nextBatsmanIndex = 2;

    while (this.wickets < 10) {
      let striker = this.players[strikerIndex];
      let nonStriker = this.players[nonStrikerIndex];

      console.log(`Bowler bowls to ${striker.name}...`);

      await new Promise((resolve) => setTimeout(resolve, 10));

      await striker.bat();

      this.inningsRuns += striker.lastBallRuns;

      console.log(striker.getTotalScore());

      console.log(
        `${striker.name} (striker) - ${striker.runs} (${striker.ballsFaced}) | ${nonStriker.name} (non-striker) - ${nonStriker.runs} (${nonStriker.ballsFaced}) || Total Score: ${this.inningsRuns}/${this.wickets} || Overs: (${this.overs}.${ballCountInOver})`,
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

      if (!nonStriker.isOut && Math.random() < 0.0045) {
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

      overRuns += striker.lastBallRuns;

      if (isSecondInnings && this.inningsRuns >= target) {
        console.log(`${this.name} has reached the target! 😁`);
        return true;
      }

      if (ballCountInOver === 6) {
        this.overs++;

        console.log(`Over completed. Runs in this over: ${overRuns}`);

        overRuns = 0;
        ballCountInOver = 0;

        let temp = strikerIndex;
        strikerIndex = nonStrikerIndex;
        nonStrikerIndex = temp;

        this.showStatus(ballCountInOver);

        if (isSecondInnings) {
          console.log(
            `---------------------Target score: ${target} runs & ${
              target - this.inningsRuns
            } need's to win ---------------------`,
          );
        } else {
          if (target > this.inningsRuns) {
            console.log(
              `---------------------${this.name} trail by ${
                target - this.inningsRuns
              } runs ---------------------`,
            );
          } else if (this.inningsRuns > target) {
            console.log(
              `---------------------${this.name} lead by ${
                this.inningsRuns - target
              } runs ---------------------`,
            );
          } else {
            console.log(
              `---------------------Scores are level---------------------`,
            );
          }
        }

        await new Promise((resolve) => setTimeout(resolve, 10));
      }
    }

    console.log(
      `${this.name} innings completed. Total Runs: ${this.inningsRuns}, Wickets: ${this.wickets}`,
    );

    this.showStatus(ballCountInOver);

    return false;
  }
}

class Match {
  Australia: Team;
  SouthAfrica: Team;

  targetScore: number;

  constructor(targetScore: number) {
    this.Australia = new Team("Australia");
    this.SouthAfrica = new Team("SouthAfrica");

    this.targetScore = targetScore;
  }

  createTeam(isAustralia: boolean) {
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
      const batsman = new Player(name, true, isAustralia, team);

      team.addPlayer(batsman);
    });
  }

  async playMatch() {
    this.createTeam(true);
    this.createTeam(false);

    console.log(`\n========== TEST MATCH STARTED ==========\n`);

    let australiaMatchTotal = 0;
    let southAfricaMatchTotal = 0;

    console.log(`\n========== AUSTRALIA 1st INNINGS ==========\n`);

    await this.Australia.batInInnings(this.targetScore, false);

    const australiaFirstInnings = this.Australia.inningsRuns;

    australiaMatchTotal += australiaFirstInnings;

    console.log(`\n========== SOUTHAFRICA 1st INNINGS ==========\n`);

    await this.SouthAfrica.batInInnings(australiaFirstInnings, false);

    const southAfricaFirstInnings = this.SouthAfrica.inningsRuns;

    southAfricaMatchTotal += southAfricaFirstInnings;

    const trail = australiaFirstInnings - southAfricaFirstInnings;

    if (trail > 0) {
      console.log(`\nSouthAfrica trail by ${trail} runs after 1st innings.\n`);
    } else if (trail < 0) {
      console.log(
        `\nSouthAfrica lead by ${Math.abs(trail)} runs after 1st innings.\n`,
      );
    } else {
      console.log(`\nScores are level after 1st innings.\n`);
    }

    console.log(`\n========== AUSTRALIA 2nd INNINGS ==========\n`);

    this.Australia.inningsRuns = 0;
    this.Australia.wickets = 0;
    this.Australia.overs = 0;

    this.Australia.players.forEach((player) => {
      player.isOut = false;
      player.currentInnings = 2;
      player.runs = 0;
      player.ballsFaced = 0;
    });

    await this.Australia.batInInnings(southAfricaFirstInnings, false);
    const australiaSecondInnings = this.Australia.inningsRuns;

    australiaMatchTotal += australiaSecondInnings;

    const target = australiaMatchTotal - southAfricaFirstInnings + 1;

    if (target <= 0) {
      console.log(
        `\nSouthAfrica won by ${10 - this.SouthAfrica.wickets} wickets.\n`,
      );

      this.getResult(australiaMatchTotal, southAfricaMatchTotal);

      return;
    }

    console.log(`\nSouthAfrica needs ${target} runs to win.\n`);

    console.log(`\n========== SOUTHAFRICA 2nd INNINGS ==========\n`);

    this.SouthAfrica.inningsRuns = 0;
    this.SouthAfrica.wickets = 0;
    this.SouthAfrica.overs = 0;

    this.SouthAfrica.players.forEach((player) => {
      player.isOut = false;
      player.currentInnings = 2;
      player.runs = 0;
      player.ballsFaced = 0;
    });

    await this.SouthAfrica.batInInnings(target, true);

    southAfricaMatchTotal += this.SouthAfrica.inningsRuns;

    this.getResult(australiaMatchTotal, southAfricaMatchTotal);
  }

  getResult(australiaScore: number, southAfricaScore: number) {
    console.log("\n========== MATCH RESULTS ==========\n");

    if (southAfricaScore > australiaScore) {
      if (this.SouthAfrica.inningsRuns > 0) {
        console.log(
          `Congratulations SouthAfrica won by ${
            10 - this.SouthAfrica.wickets
          } wickets`,
        );
      } else {
        console.log(
          `Congratulations SouthAfrica won by ${
            southAfricaScore - australiaScore
          } runs`,
        );
      }
    } else if (australiaScore > southAfricaScore) {
      console.log(
        `Congratulations Australia won by ${
          australiaScore - southAfricaScore
        } runs`,
      );
    } else {
      console.log("Match Drawn");
    }

    const australiaFirstInningsRuns = this.Australia.players.reduce(
      (sum, player) => sum + player.firstInningsRuns,
      0,
    );

    const australiaSecondInningsRuns = this.Australia.players.reduce(
      (sum, player) => sum + player.secondInningsRuns,
      0,
    );

    const australiaFirstInningsBalls = this.Australia.players.reduce(
      (sum, player) => sum + player.firstInningsBalls,
      0,
    );

    const australiaSecondInningsBalls = this.Australia.players.reduce(
      (sum, player) => sum + player.secondInningsBalls,
      0,
    );

    const southAfricaFirstInningsRuns = this.SouthAfrica.players.reduce(
      (sum, player) => sum + player.firstInningsRuns,
      0,
    );

    const southAfricaSecondInningsRuns = this.SouthAfrica.players.reduce(
      (sum, player) => sum + player.secondInningsRuns,
      0,
    );

    const southAfricaFirstInningsBalls = this.SouthAfrica.players.reduce(
      (sum, player) => sum + player.firstInningsBalls,
      0,
    );

    const southAfricaSecondInningsBalls = this.SouthAfrica.players.reduce(
      (sum, player) => sum + player.secondInningsBalls,
      0,
    );

    const australiaTotalBalls =
      australiaFirstInningsBalls + australiaSecondInningsBalls;

    const southAfricaTotalBalls =
      southAfricaFirstInningsBalls + southAfricaSecondInningsBalls;

    console.log(`Australia's Final Match Score: ${australiaScore} Runs`);

    console.log(
      `Australia Innings: ${australiaFirstInningsRuns} (${Math.floor(
        australiaFirstInningsBalls / 6,
      )}.${australiaFirstInningsBalls % 6}) & ${australiaSecondInningsRuns} (${Math.floor(
        australiaSecondInningsBalls / 6,
      )}.${australiaSecondInningsBalls % 6})`,
    );

    console.log(
      `Australia Total Overs: ${Math.floor(
        australiaTotalBalls / 6,
      )}.${australiaTotalBalls % 6}`,
    );

    console.log("");

    console.log(`SouthAfrica's Final Match Score: ${southAfricaScore} Runs`);

    console.log(
      `SouthAfrica Innings: ${southAfricaFirstInningsRuns} (${Math.floor(
        southAfricaFirstInningsBalls / 6,
      )}.${southAfricaFirstInningsBalls % 6}) & ${southAfricaSecondInningsRuns} (${Math.floor(
        southAfricaSecondInningsBalls / 6,
      )}.${southAfricaSecondInningsBalls % 6})`,
    );

    console.log(
      `SouthAfrica Total Overs: ${Math.floor(
        southAfricaTotalBalls / 6,
      )}.${southAfricaTotalBalls % 6}`,
    );
  }
}

const match = new Match(myTarget);

match.playMatch().then(() => {
  console.log("\n========== AUSTRALIA 1st INNINGS ==========\n");

  match.Australia.players.forEach((player) => {
    console.log(
      `${player.name} - ${player.firstInningsRuns} (${player.firstInningsBalls})`,
    );
  });

  console.log("\n========== AUSTRALIA 2nd INNINGS ==========\n");

  match.Australia.players.forEach((player) => {
    console.log(
      `${player.name} - ${player.secondInningsRuns} (${player.secondInningsBalls})`,
    );
  });

  console.log("\n========== SOUTHAFRICA 1st INNINGS ==========\n");

  match.SouthAfrica.players.forEach((player) => {
    console.log(
      `${player.name} - ${player.firstInningsRuns} (${player.firstInningsBalls})`,
    );
  });

  console.log("\n========== SOUTHAFRICA 2nd INNINGS ==========\n");

  match.SouthAfrica.players.forEach((player) => {
    console.log(
      `${player.name} - ${player.secondInningsRuns} (${player.secondInningsBalls})`,
    );
  });
});

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

      let FOW = this.isHomeTeam ? 0.011 : 0.012;

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
  fallOfWickets: {
    wicket: number;
    score: number;
    overs: string;
    batsman: string;
  }[] = [];

  constructor(name: string) {
    this.name = name;
    this.totalRuns = 0;
    this.wickets = 0;
    this.overs = 0;
    this.battingOrder = 0;
    this.indivisualScore = 0;
    this.ballsBowled = 0;
  }

  recordFallOfWicket(player: Player): void {
    this.fallOfWickets.push({
      wicket: this.wickets,
      score: this.totalRuns,
      overs: this.getOvers(),
      batsman: player.name,
    });
  }

  showFallOfWickets(): void {
    if (this.fallOfWickets.length === 0) {
      console.log("No wickets fell.");
      return;
    }

    this.fallOfWickets.forEach((fow) => {
      console.log(
        `${fow.wicket}-${fow.score} (${fow.overs} ov) - ${fow.batsman}`,
      );
    });
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

        this.recordFallOfWicket(striker);

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

          this.recordFallOfWicket(striker);
          wicketFellThisBall = true;

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

          this.recordFallOfWicket(nonStriker);
          wicketFellThisBall = true;

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
  England: Team;
  NewZealand: Team;
  totalOvers: number;
  maxBallsPerDay: number;
  days: number;
  targetScore: number;

  constructor(targetScore: number) {
    this.England = new Team("England");
    this.NewZealand = new Team("NewZealand");
    this.totalOvers = 90 * 5;
    this.maxBallsPerDay = 90 * 6;
    this.days = 5;
    this.targetScore = targetScore;
  }

  createTeam(teamName: string, isEngland: boolean) {
    const englandBatsmen = [
      "Ben Duckett",
      "Emilio Gay",
      "Jordan Cox",
      "Joe Root",
      "Harry Brook",
      "Dan Lawrence",
      "Jamie Smith",
      "Gus Atkinson",
      "Ollie Robinson",
      "Jofra Archer",
      "Josh Tongue",
    ];

    const newZealandBatsmen = [
      "Tom Latham",
      "Devon Conway",
      "Henry Nicholls",
      "Rachin Ravindra",
      "Daryl Mitchell",
      "Tom Blundell",
      "Glenn Phillips",
      "Nathan Smith",
      "Kyle Jamieson",
      "Matt Henry",
      "Jacob Duffy",
    ];

    const team = isEngland ? this.England : this.NewZealand;

    const batsmenNames = isEngland ? englandBatsmen : newZealandBatsmen;

    batsmenNames.forEach((name) => {
      let batsman = new Player(name, true, isEngland, team);
      team.addPlayer(batsman);
    });

    return team;
  }

  async playMatch() {
    this.createTeam("England", true);
    this.createTeam("NewZealand", false);

    console.log(`England's First Innings`);

    await this.England.batInInnings(this.targetScore, false);

    console.log(`NewZealand's First Innings`);

    await this.NewZealand.batInInnings(this.England.totalRuns, true);

    this.getResult();
  }

  getResult() {
    console.log("Match Results:");

    if (this.England.totalRuns > this.NewZealand.totalRuns) {
      console.log(
        `Congratulations England won by ${
          this.England.totalRuns - this.NewZealand.totalRuns
        } runs`,
      );
    } else if (this.NewZealand.totalRuns > this.England.totalRuns) {
      console.log(
        `Congratulations NewZealand won by ${10 - this.NewZealand.wickets} wickets`,
      );
    } else {
      console.log("It's a draw.");
    }

    console.log(
      `England's Final Score: ${this.England.totalRuns} Runs, Wickets: ${
        this.England.wickets
      } (${this.England.getOvers()} Overs) | Run Rate: ${this.England.getRunRate(
        Number(this.England.getOvers()),
        this.England.totalRuns,
      )}`,
    );

    console.log(
      `NewZealand's Final Score: ${this.NewZealand.totalRuns} Runs, Wickets: ${
        this.NewZealand.wickets
      } (${this.NewZealand.getOvers()} Overs) | Run Rate: ${this.NewZealand.getRunRate(
        Number(this.NewZealand.getOvers()),
        this.NewZealand.totalRuns,
      )}`,
    );
  }
}

const match = new Match(myTarget);

match.playMatch().then(() => {
  console.log("\n========== England SCORECARD ==========\n");

  match.England.players.forEach((player) => {
    console.log(
      `${player.name} - ${player.runs} (${player.ballsFaced}) ${
        player.isOut ? "OUT" : "NOT OUT"
      }`,
    );
  });

  console.log("\n========== NewZealand SCORECARD ==========\n");

  match.NewZealand.players.forEach((player) => {
    console.log(
      `${player.name} - ${player.runs} (${player.ballsFaced}) ${
        player.isOut ? "OUT" : "NOT OUT"
      }`,
    );
  });

  console.log("\n========== England FALL OF WICKETS ==========\n");
  match.England.showFallOfWickets();

  console.log("\n========== NewZealand FALL OF WICKETS ==========\n");
  match.NewZealand.showFallOfWickets();
});

import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="mt-20 container space-y-2 antialiased">
      <h2 className="text-3xl font-semibold py-2">About ELO</h2>
      <p>
        Elo rating (aka. ELO score) is originating from chess, it was invented
        by a Hungarian mathematician called Arpad Elo to rank chess players. It
        has many features which make it possible to be used in other fields like
        sports, and video games to rank people who are competing against each
        other.
      </p>

      <p>
        In a nutshell what it does is assign a score to each player, based on
        their strength. Using this single score we not only can rank players but
        we can tell the win and lose probability of a given match.
      </p>

      <p>
        How it does it? That is what you will see in this article. In short,
        there is a calibration period, and at the start of this period, every
        player starts from the same ELO score, and then when they compete, based
        on the outcome of their match their scores get updated. The winner gain
        points the loser loses points. The points that are at stake for one
        match are dependent on the point difference between the two competing
        players. After some matches, players' scores will converge to their true
        value.
      </p>

      <p>
        Wikipedia proves a great summary if you would like to read more about
        the topic:{" "}
        <Link
          href={"https://en.wikipedia.org/wiki/Elo_rating_system"}
          className="underline underline-offset-2 decoration-dotted text-blue-600 hover:text-blue-400"
        >
          ELO rating
        </Link>{" "}
        In our example, we will see how to calculate the ELO ratings for
        football teams, which will make it possible to rank and calculate
        winning probabilities for them. By this, we can tell who is the current
        best team and calculate winning probabilities which can be a basis of a
        more complex prediction model.
      </p>

      <p>
        In this example, I will show you how to calculate ELO scores for English
        Premier League football clubs using Python by writing our own functions.
      </p>

      <h2 className="text-3xl font-semibold py-2">Calculating ELO</h2>

      <h4 className="text-xl font-semibold py-2">
        Writing the ELO calculation function
      </h4>

      <p>To be able to calculate the ELO score, we need two things:</p>

      <ol className="list-decimal px-8">
        <li className="">
          Calculate the expected probability of an outcome, based on two input
          scores from the two opponents. <br /> For calculating this we need to
          use the following formula: If player A has a rating of RA and player B
          a rating of RB, the exact formula for the expected score of player A
          is: <br /> EA = 1 / (1 + 10 ˆ ((RB — RA) / weights)) Similarly, the
          expected score for player B is: EB = 1 / (1 + 10 ˆ ((RA — RB) /
          weights)) (usually, the default weight is set to 400 but we can
          parametrize this too)
        </li>
        <li className="flex flex-col space-y-3">
          <span>
            Based on the actual result update the score with new values for each
            team. When a player’s actual tournament scores exceed their expected
            scores, the Elo system takes this as evidence that the player’s
            rating is too low, and needs to be adjusted upward. Similarly, when
            a player’s actual tournament scores fall short of their expected
            scores, that player’s rating is adjusted downward. Elo’s original
            suggestion, which is still widely used, was a simple linear
            adjustment proportional to the amount by which a player
            over-performed or under-performed their expected score.
          </span>
          <span>
            The maximum possible adjustment per game is called the K-factor.
            This K-factor can be set to different values in chess it is set to
            16 or 32 based on the level of the players, but we can set it to an
            arbitrary value that is close to this. Suppose player A (again with
            rating RA) was expected to score EA points but actually scored SA
            points. The formula for updating that player’s rating is: R’A = RA *
            K (SA — EA) This update can be performed after each game or each
            tournament, or after any suitable rating period.
          </span>
        </li>
      </ol>
    </section>
  );
};

export default Page;

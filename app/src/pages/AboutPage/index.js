import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
// importing the gromment components used in this page
import Box from 'grommet-udacity/components/Box';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Card from 'grommet-udacity/components/Card';
import Anchor from 'grommet-udacity/components/Anchor';
import App from 'grommet-udacity/components/App';
import Split from 'grommet-udacity/components/Split';
import Article from 'grommet-udacity/components/Article';
import Sidebar from 'grommet-udacity/components/Sidebar';
import Heading from 'grommet-udacity/components/Heading';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import { MartinRulz,
        AppFooter } from 'components';
// importing the content
import contributorVoices from './contributorVoices';


/* THINGS THAT STILL DO BE WORKED ON
==========================================================================

// TODO: implement the shuffle on the contributorVoices array
// so that the contributor Cards always pop up in a different order.

// TODO: remove console.log just below the <Sidebar> JSX

// TODO: separation of concerns. Create a container or component to better
// nest the content and the logic.

==========================================================================
*/


// Fisher-Yates shuffle (with awesome visualization!) https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

const AboutPage = () => (
  <div className={styles.container}>
    <App>
      <Split
        fixed="false"
        priority="left"
        showOnResponsive="priority"
        flex="both"
      >
        <Article>
            <Headline strong>
              What’s all this About?
            </Headline>
            <Heading tag="h2" strong>
              A (not so) short Why of this project.
            </Heading>
            <Paragraph>
              So you’ve graduated from one of Udacity’s Nanodegrees! Congratulations! :thumbs_up: :tada: You’re now a part of the <Anchor href="mailto:tyler@udacity.com" label="Udacity Alumni slack channel" /> (&lt;- <em>click if you’re not yet. You should be</em>).
              <br />There you’ve read some discussions, or had some discussions, and probably you’re super excited about all those other smart and handsome Alumni that are working on a million of compelling projects! (… Wait… don’t go those dark places. Fight the <Anchor href="https://en.wikipedia.org/wiki/Impostor_syndrome" label="impostor syndrome" /> creeping up… Grind it, gnaw it - - remember you’ve learned a lot, and most importantly you’ve learned how to learn ever more!! Your best projects lie in the future! <em>Hm…</em>, I can hear you think, <em>…so what if there was a possibility to get in touch with the person who’s working on project Awwwsome…?</em> Alright! : ) Seems we’re back on track! Great, here we go!)
            </Paragraph>
            <Heading tag="h3">
              We’re all Udacity Alumni here. But we come from a great number of diverse backgrounds.
            </Heading>
            <Paragraph>
              Some worked in construction before hopping onto the digital train, some in Canada, some in the Arts. Some are in school, others graduated from university with a degree in communications. Some even did a programming related education, dabbled with their mum’s tower PC after having just started to walk, or earned sweet money in one of these fields before. But there are also many of us who have not, and are still pretty new to the industry.
              <br />Online education offers this possibility to change your path and follow interests in a new way. Some even dive into the digital world during their retirement! Yes yes, we’re a diverse bunch. <em>pads any reachable back</em> Here comes yet another example: there are those that can dedicate all their waking hours to this new path, and there are those who somehow manage to juggle all the materials while working a full-time job or raising a family (<em>Respect!</em>).
              <br />And there is more: Coming from all corners of the world, we tie together a bouquet of timezones so that it is fair to say that <strong>this community never sleeps</strong>. And some of us stay where they are to work and study from the comfort of their homes, some others zip around and learn how to find internet on the road.
            </Paragraph>
            <Paragraph>
              Online education is a big box filled with surprises and opportunities - and interesting people.
              <br />But as diverse as we might be, there’s something that ties us together: <strong>the wish to learn and the will to work for it.</strong>
              <br />This webapp was born from these principles.
            </Paragraph>
            <Heading tag="h3">
              The Alumni Webapp is a collaborative project built by and for Alumnis.
            </Heading>
            <Paragraph>
              It aims on creating a platform that allows us to exchange ideas, opinions, projects, jobs and whatnot. This webapp wants to strengthen the alumni community by offering chances to work together, find places to meet up, organize events, and talk about interesting topics.
            </Paragraph>
            <Paragraph>
              It is also a <strong>work-in-progress</strong> and as such it aims on providing another piece of the puzzle that can teach us to become better digital workers: <strong>collaboration on real-world products</strong>.
              <br />During our Nanodegrees we spent our time learning from Udacity’s Resources and from the vast plains of the web. Then we wrapped up and applied that knowledge to fulfill tasks and complete projects. We’ve learned to research topics and solve errors by ourselves (and also sometimes ask for support). We got to know what it’s like to build a project, receive feedback on our work, then iterate and improve.
            </Paragraph>
            <Paragraph>
              But how is it like to build something collaboratively? There’s a whole set of new skills to be tried and learned, and the Open Source Community offers great practice grounds for that. But the wide world’s web might be too intimidating to start out - so here we have our very own open source project that everyone is invited to collaborate to. A safe place to try, among a smaller web of people who appreciate trying. : )
            </Paragraph>
            <Heading tag="h3">
            Collaborating on building the webapp is about being part of building a tool that can benefit yourself and all the other Alumnis out there.
            </Heading>
            <Paragraph>
            It’s about breathing life into your ideas, and it’s about working to make them happen collaboratively.
            </Paragraph>
            <Paragraph>
              Because we’re a great bunch of people who have gone through a similar path of education. We know what it’s like to be stuck, what it’s like to come from an unrelated background and doubt whether we actually know anything at all. We also know that we can learn how to do something new and exciting, and we are happy to give back to the community and help others along their personal way.
            </Paragraph>
            <Paragraph>
              So here’s something to ponder:
              When you jumble up the letters of “alumni” and add the first letters of “For You”, you get “nu FamilY”.
              <br />Coincidence? Maybe.
              <br />A bad wordplay? Definitely.
              <br />But in a way this is what we are - and what we aim to be for each other:
            </Paragraph>
            <Heading tag="h3" strong>
              A community of like-minded people who want to learn more and help each other on our ways.
            </Heading>
            <Paragraph>
              The Udacity Alumni Webapp is a place where we can work on this together.
            </Paragraph>
            <Paragraph>
              So that’s what this is all about. : )
            </Paragraph>
            <Paragraph>
              Hopefully you like the app and the idea, and you’ll feel encouraged to post, propose, code, improve, communicate, meet, build, share and dream.
              <br />And to do anything else that will help to make this place reflect the humble greatness of the people and ideas that make up this community.
            </Paragraph>
        </Article>
        <Sidebar>
          { console.log("work it!_____" + contributorVoices) }
          <Box
            pad="large"
          >
            <Heading tag="h2" strong>
              Contributor Voices
            </Heading>
            <Paragraph>
            <Card label="Anything you want" thumbnail="https://upload.wikimedia.org/wikipedia/commons/3/33/White_square_with_question_mark.png"
              heading="Hei You!" description="There surely is something you can do to make this better! : )"
              link={<Anchor href="https://github.com/udacityalumni" primary={true} label="Link" />} />
            </Paragraph>
            <Paragraph>
            <Card label="Coder" thumbnail="https://avatars0.githubusercontent.com/u/10746052?v=3&s=400"
              heading="zhangs" description="The project is about learning React and practice collaborative development with friendly fellow Udacians."
              link={<Anchor href="https://github.com/zhangtreefish" primary={true} label="Link" />} />
            </Paragraph>
            <Paragraph>
            <Card label="Unknown" thumbnail="https://upload.wikimedia.org/wikipedia/commons/3/33/White_square_with_question_mark.png"
              heading="To be revealed" description="Above all else, this project has connected me with an outstanding group of people, all of whom share my passion for education."
              link={<Anchor href="https://github.com/anonymous" primary={true} label="Link" />} />
            </Paragraph>
            <Paragraph>
            <Card label="Coder" thumbnail="https://avatars1.githubusercontent.com/u/2024584?v=3&s=400"
              heading="Kelli Blalock" description="Helping out with the Udacity Alumni Web App is a great way to learn new skills and how to collaborate on a coding project with a team! I didn't know how hard it would actually be to learn a professional web development stack, but with help from the team, I am contributing code, testing the app, and finding and fixing issues. It also feels pretty awesome to help with the app because Udacity has been the best learning experience I've had as far as getting job ready skills to become a web developer, and I believe this app can help alumni take their skills to the next level! Alumni can contribute to this app, find projects to collaborate on with other alumni, and perhaps find a mentor or meetup."
              link={<Anchor href="https://github.com/kellim" primary={true} label="Link" />} />
            </Paragraph>
            <Paragraph>
            <Card label="Coder" thumbnail="https://avatars3.githubusercontent.com/u/19292575?v=3&s=400"
              heading="Abishek Gosh" description="..."
              link={<Anchor href="https://github.com/ghoshabhi" primary={true} label="Link" />} />
            </Paragraph>
            <Paragraph>
            <Card label="Wrote some Posts" thumbnail="https://upload.wikimedia.org/wikipedia/commons/3/33/White_square_with_question_mark.png"
              heading="SadlyFake Demo-User" description="I love blogging!"
              link={<Anchor href="https://github.com/sadly-fake" primary={true} label="Link" />} />
            </Paragraph>
            <Paragraph>
            <Card label="Did a bit of code" thumbnail="https://avatars1.githubusercontent.com/u/12371494?v=3&s=400"
              heading="Martin Breuss" description="This is me. I like the webapp project because so many nice people here, yo!"
              link={<Anchor href="https://github.com/martin-martin" primary={true} label="Link" />} />
            </Paragraph>
            <Paragraph>
            <Card label="Manager" thumbnail="https://avatars2.githubusercontent.com/u/13810084?v=3&s=400"
              heading="Ryan Collins" description="Don't be lazy, write your own text!"
              link={<Anchor href="https://github.com/RyanCCollins" primary={true} label="Link" />} />
            </Paragraph>
            <Paragraph>
            <Card label="Anything you want" thumbnail="https://upload.wikimedia.org/wikipedia/commons/3/33/White_square_with_question_mark.png"
              heading="Hei You!" description="Excited to build something? Click the link!"
              link={<Anchor href="https://github.com/udacityalumni" primary={true} label="Link" />} />
            </Paragraph>
          </Box>
        </Sidebar>
      </Split>
      <AppFooter />
    </App>
  </div>
);

export default cssModules(AboutPage, styles);
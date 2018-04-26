import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import { Card, CardItem, Body } from 'native-base';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import HTML from 'react-native-render-html';


const BACON_IPSUM = 'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';
const ayat1 = "             <ol>      <li>        <h1>الحمدلله</h1>      </li>      <ol>        <li>We thank and praise Allah no matter what has happened, although we may not understand the wisdom behind it.</li>        <li>ثناء&nbsp;- Praise</li>        <ol>          <li>Example: Praise athlete that is good</li>        </ol>        <li>Thanks</li>        <ol>          <li>When someone does something for you</li>          <li>When someone does you a favor</li>        </ol>        <li>When you praise something, it doesn't necessarily mean that you will thank it.</li>        <li>When you thank someone, you don't necessarily have to praise it.</li>        <ol>          <li>Musa as thanks Firaun, but will never praise him for what he does.</li>        </ol>        <li>It wasn't المدح&nbsp;or&nbsp;الشكر لله</li>        <ol>          <li>Why?</li>          <ol>      <li>المدح&nbsp;: Fake praises are done all the time, to impress people, but was never sincere.</li>      <li>الشكر: Thanks is only given as a reaction. It wasn't given out of the blue.</li>          </ol>          <li>الحمد&nbsp;can only mean genuinity and non-reactionary.</li>        </ol>        <li>The concise nature of the word conveys the best meaning. The shorter a word to describe something, the better it is.</li>        <li>No 'و' (and) used to pair&nbsp;المدح and الشكر&nbsp;</li>        <ol>          <li>و will separate the meaning</li>          <ol>      <li>Thanks and praise for two different things.</li>      <li>Means sometime you are praising for something, but some other times thanking Him for something else.</li>          </ol>          <li>الحمد لله&nbsp;is not just something that we say, it is supposed to be an attitude that we practice</li>        </ol>        <li>الحمد لله is in the form of a noun</li>        <ol>          <li>Nouns don't have any tense - they are timeless and permanent.</li>          <li>We are praising Allah now, but the praise and thanks to Allah will be there forever</li>          <li>It will never depend on any person reciting it i.e. it doesn't need a doer.</li>          <li>Acknowledging that Allah doesn't need us, we are the ones who need him.</li>        </ol>        <li>Why is it not in the form of a command?</li>        <ol>          <li>So that it was never a choice for anyone or anything to perform.</li>          <li>The phrase never depends on Allah creations.</li>        </ol>        <li>It doesn't have an 'انَّ' (Absolutely) as usually said before Khutba</li>        <ol>          <li>Informative vs Emotional</li>          <li>A usual sentence in Arabic can either convey feelings or deliver information.</li>          <li>'انَّ' limits to it being informative. Without 'انَّ' it could be both informative and emotional.</li>        </ol>        <li>Why not 'لله الحمد'?</li>        <ol>          <li>The unusual sequence of الحمد&nbsp;and لله will imply exclusivity.</li>          <li>In other words, praise and thanks is ONLY for Allah.</li>          <li>The word only is used when</li>          <ol>      <li>there is a need for emphasis (when you are in argument)</li>      <li>for an extra meaning. (eg. الحمد cannot belong to anyone else)</li>          </ol>          <li>When 'only' is used, it can only mean that either there are some confusion, or the conversation is actually a debate that needs to be won.</li>          <li>Allah never wanted to make it a debate, thus he never uses 'only'.</li>          <li>It didn't need to be forced into our hearts, because its already in us.</li>        </ol>        <li>The importance of the word الله&nbsp;.</li>        <ol>          <li>Allah introduces himself to us with His name.</li>          <li>If 'لله' is missing, it would cause confusion to who is the 'رب العالمىن&nbsp;' (Master of the Worlds).</li>          <li>If 'لله' is replaced by some other names of Allah, it will only mean that the الحمد&nbsp;is for those qualities that the name possesses.</li>        </ol>      </ol>      <li>        <h1>ربِّ العلمىن&nbsp;</h1>      </li>      <ol>        <li>رب</li>        <ol>          <li>Someone who owns.</li>          <ol>      <li>We are the property.</li>          </ol>          <li>Someone who ensures growth and takes care of it.</li>          <ol>      <li>Sometimes people own something but never takes care of it. Allah is never like that.</li>      <li>Allah is the caretaker of</li>      <ol>        <li>The flow of our blood</li>        <li>Our breath</li>        <li>Everything that made use live</li>      </ol>          </ol>          <li>Someone who give gifts to the thing he owns.</li>          <ol>      <li>The gifts are given besides the things that the property deserves.</li>      <li>If we ever receive something, we should never complain, because we never own or deserve it.</li>          </ol>          <li>Someone who have the authority over his properties</li>          <ol>      <li>He has full control over His properties.</li>          </ol>          <li>All of us have no authority over anything, only Allah does.</li>          <li>رب creates a relationship between us and Him</li>          <ol>      <li>We have a lot of relationships with Allah, but the most important is:</li>      <ol>        <li>Allah is رب, and we are عبد.</li>        <li>Accepting this is the summary of the entire Quran.</li>      </ol>      <li>A slave have no choice.</li>      <ol>        <li>However, he cannot do anything until the master tells him what to do.</li>        <li>A slave is a slave all the time.</li>        <li>A slave is not the same as a servant, we don't give a service and expect a paycheck from Allah. We can't say no when there is something that we may not like.</li>        <li>The رب and عبد relationship represents a connection to the ayat اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ meaning: tell me what to do Ya رب.</li>      </ol>      <li>Relation to previous phrase:</li>      <ol>        <li>We are so grateful to Allah that naturally the slavery becomes a thing of choice. We want to become slaves to Allah out of willingness and love.</li>        <li>This is a unique form of slavery.</li>      </ol>          </ol>        </ol>        <li>          الْعَالَمِينَ        </li>        <ol>          <li>Definition: worlds of people, different nations.</li>          <li>A world that spans the experience of everyone living.</li>          <ol>      <li>Distinct cultures</li>      <li>Distinct civilizations</li>          </ol>          <li>Allah created all the cultures, languages and civilizations.</li>          <li>You can live in all these different environments/worlds, and still be guided.</li>        </ol>      </ol>    </ol>";

const CONTENT = [
  {
    title: 'First',
    content: [
    'الحمدلله',
    'We thank and praise Allah no matter what has happened, although we may not understand the wisdom behind it.',
    'ثناء - Praise, e.g: Praise athlete that is good',
    'Thanks - when someone does something for you, or when someone does you a favor',
    'When you praise something, it doesn\'t necessarily mean that you will thank it.',
    'When you thank someone, you don\'t necessarily have to praise it.',
    'Musa as thanks Firaun, but will never praise him for what he does.',
    'Notice tt wasn\'t المدح or الشكر لله, why?',
    'المدح can be fake praises are done all the time, to impress people, but was never sincere.',
    'الشكر is the thanks that is only given as a reaction. It wasn\'t given out of the blue.',
    'But, الحمد can only mean genuinity and non-reactionary.',
    'The concise nature of the word conveys the best meaning. The shorter a word to describe something, the better it is.',




    ],
  },
  {
    title: 'Second',
    content: BACON_IPSUM,
  },
  {
    title: 'Third',
    content: BACON_IPSUM,
  },
  {
    title: 'Fourth',
    content: BACON_IPSUM,
  },
  {
    title: 'Fifth',
    content: BACON_IPSUM,
  },
];

const SELECTORS = [
  {
    title: 'First',
    value: 0,
  },
  {
    title: 'Third',
    value: 2,
  },
  {
    title: 'None',
    value: false,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});

export default class ExampleView extends Component {
  state = {
    activeSection: false,
    collapsed: true,
  };

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  _setSection(section) {
    this.setState({ activeSection: section });
  }

  _renderHeader(section, i, isActive) {
    return (
      <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  }

  _renderContent(section, i, isActive) {
    var textCards = []
    textCards.push(<CardItem header bordered>
              <Text style={{ fontSize: 30, textAlign: 'center' }}>{section.content[0]}</Text>
            </CardItem>)
    for(var i = 1; i < 3; i++){
      textCards.push(<CardItem bordered>
        <Body>
              <Text>{section.content[i]}</Text>
              </Body>
            </CardItem>)
    }

    return (
        <ScrollView>
        <Card>
          {textCards}
          </Card>
        </ScrollView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Accordion Example</Text>

        <View style={styles.selectors}>
          <Text style={styles.selectTitle}>Select:</Text>
          {SELECTORS.map(selector => (
            <TouchableHighlight key={selector.title} onPress={this._setSection.bind(this, selector.value)}>
              <View style={styles.selector}>
                <Text style={selector.value === this.state.activeSection && styles.activeSelector}>
                  {selector.title}
                </Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>

        <TouchableHighlight onPress={this._toggleExpanded}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Single Collapsible</Text>
          </View>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.collapsed} align="center">
          <View style={styles.content}>
            <Text>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
          </View>
        </Collapsible>
        <Accordion
          activeSection={this.state.activeSection}
          sections={CONTENT}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          duration={400}
          onChange={this._setSection.bind(this)}
        />

      </View>
    );
  }
}

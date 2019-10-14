import { AspectRatioMode, QIcon, WindowState } from '@nodegui/nodegui';
import { Image, Renderer, Text, View, Window } from '@nodegui/react-nodegui';
import path from 'path';
import React, { useState } from 'react';
import imageUrl from '../assets/nodegui.jpg';
import { Button, Input, style } from './components';

const distImgUrl = path.resolve(__dirname, imageUrl);
const minSize = { width: 800, height: 400 };

const imageStyle = style({
  height: '300px',
  width: '300px',
});

const container = style({
  minHeight: '100%',
});
const Container = ({ children }) => <View style={container}>{children}</View>;

const row = style({
  flexDirection: 'row',
});
const Row = ({ children }) => <View style={row}>{children}</View>;

const col = style({
  flex: '1',
  flexDirection: 'column',
  alignItems: 'center',
});
const Col = ({ children }) => <View style={col}>{children}</View>;

const Up = ({ score, setScore }) => (
  <Button onClick={() => setScore(score + 1)}>+</Button>
);
const Down = ({ score, setScore }) => (
  <Button onClick={() => setScore(Math.max(0, score - 1))}>-</Button>
);

const windowIcon = new QIcon(distImgUrl);

const App = () => {
  const [title, setTitle] = useState('The National Championships');
  const [team1, setTeam1] = useState('Vikings');
  const [score1, setScore1] = useState(0);
  const [team2, setTeam2] = useState('Wildcats');
  const [score2, setScore2] = useState(0);

  return (
    <>
      <Window
        windowIcon={windowIcon}
        minSize={minSize}
        windowTitle="Scoreboard"
        windowState={WindowState.WindowMaximized}
      >
        <Container>
          <View style="width: '100%'">
            <Input onChange={setTitle} value={title}></Input>
          </View>

          <View>
            <Row>
              <Col>
                <Image
                  style={imageStyle}
                  src={distImgUrl}
                  aspectRatioMode={AspectRatioMode.KeepAspectRatio}
                />
                <Input onChange={setTeam1} value={team1}></Input>

                <View>
                  <Down score={score1} setScore={setScore1}></Down>
                  <Text>{score1}</Text>
                  <Up score={score1} setScore={setScore1}></Up>
                </View>
              </Col>

              <Col>
                <Text>timer</Text>
              </Col>

              <Col>
                <Image
                  style={imageStyle}
                  src={distImgUrl}
                  aspectRatioMode={AspectRatioMode.KeepAspectRatio}
                />
                <Input onChange={setTeam2} value={team2}></Input>

                <View>
                  <Down score={score2} setScore={setScore2}></Down>
                  <Text style="flex-grow: 2">{score2}</Text>
                  <Up score={score2} setScore={setScore2}></Up>
                </View>
              </Col>
            </Row>
          </View>
        </Container>
      </Window>

      <Window
        windowIcon={windowIcon}
        minSize={minSize}
        windowTitle="Scoreboard: projector"
      >
        <Container>
          <View style="width: '100%'">
            <Text>{title}</Text>
          </View>

          <View>
            <Row>
              <Col>
                <Image
                  style={imageStyle}
                  src={distImgUrl}
                  aspectRatioMode={AspectRatioMode.KeepAspectRatio}
                />
                <Text>{team1}</Text>
                <Text>{score1}</Text>
              </Col>

              <Col>
                <Text>timer</Text>
              </Col>

              <Col>
                <Image
                  style={imageStyle}
                  src={distImgUrl}
                  aspectRatioMode={AspectRatioMode.KeepAspectRatio}
                />
                <Text>{team2}</Text>
                <Text>{score2}</Text>
              </Col>
            </Row>
          </View>
        </Container>
      </Window>
    </>
  );
};

Renderer.render(<App />);

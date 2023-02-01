import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './mysteries.module.scss';
import dolorosos from '../../assets/dolorosos.jpg'
import gozosos from '../../assets/gozosos.jpg'
import luminosos from '../../assets/luminosos.jpg'
import gloriosos from '../../assets/gloriosos.png'


export default function Mysteries() {
  return (
    <section>
      <Row xs={1} md={1} className={`${styles.mysterium_container}`}>
      <Col>
            <Card className={styles.mysterium_card}>
              <Card.Img variant="top" src={gozosos} className={styles.mysterium_image} />
              <Card.Body>
                <Card.Title className={styles.card_title}>Mistérios Gozosos</Card.Title>
                «No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galiléia, chamada Nazaré,  a uma virgem desposada com um homem que se chamava José, da casa de Davi e o nome da virgem era Maria» (Lc 1, 26-27). 
                <Card.Text>
                <i>Segundas e sábados.</i>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.mysterium_card}>
              <Card.Img variant="top" src={dolorosos} className={styles.mysterium_image}/>
              <Card.Body>
                <Card.Title className={styles.card_title}>Mistérios Dolorosos</Card.Title>
                <Card.Text>
                «Retirou-se Jesus com eles para um lugar chamado Getsêmani e disse-lhes: "Assentai-vos aqui, enquanto eu vou ali orar". E, tomando consigo Pedro e os dois filhos de Zebedeu, começou a entristecer-se e a angustiar-se. Disse-lhes, então: "Minha alma está triste até a morte. Ficai aqui e vigiai comigo". Adiantou-se um pouco e, prostrando-se com a face por terra, assim rezou: "Meu Pai, se é possível, afasta de mim este cálice! Todavia não se faça o que eu quero, mas sim o que tu queres"» (Mt 26, 36-39).
                </Card.Text>
                <Card.Text>
                  <i>Terças e sextas.</i>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.mysterium_card}>
              <Card.Img variant="top" src={gloriosos} className={styles.mysterium_image}/>
              <Card.Body>
                <Card.Title className={styles.card_title}>Mistérios Gloriosos</Card.Title>
                <Card.Text>
                «No primeiro dia da semana, muito cedo, dirigiram-se ao sepulcro com os aromas que haviam preparado. Acharam a pedra removida longe da abertura do sepulcro. Entraram, mas não encontraram o corpo do Senhor Jesus. Não sabiam elas o que pensar, quando apareceram em frente delas dois personagens com vestes resplandecentes. Como estivessem amedrontadas e voltassem o rosto para o chão, disseram-lhes eles: "Por que buscais entre os mortos aquele que está vivo? Não está aqui, mas ressuscitou"» (Lc 24, 1-6). 
                </Card.Text>
                <Card.Text>
                  <i>Quartas e domingos.</i>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.mysterium_card}>
              <Card.Img variant="top" src={luminosos} className={styles.mysterium_image}/>
              <Card.Body>
                <Card.Title className={styles.card_title}>Mistérios Luminosos</Card.Title>
                <Card.Text>
                «Depois que Jesus foi batizado, saiu logo da água. Eis que os céus se abriram e viu descer sobre ele, em forma de pomba, o Espírito de Deus. E do céu baixou uma voz: "Eis meu Filho muito amado em quem ponho minha afeição"» (Mt 3,16-17).
                </Card.Text>
                <Card.Text>
                  <i>Quintas-feiras.</i>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </section>
  )
}
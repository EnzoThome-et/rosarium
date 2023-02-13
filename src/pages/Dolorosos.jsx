import React from 'react';
import Header from '../components/Header';
import Carousel from 'react-bootstrap/Carousel';
import styles from './slides.module.scss';
import Footer from '../components/Footer';
import oferecimento from '../assets/oferecimento.jpg';
import credo from '../assets/credo.jpg';
import agonia from '../assets/pageDolorosos/agonia.jpg';
import flagelacao from '../assets/pageDolorosos/flagelacao.jpg';
import coroacao from '../assets/pageDolorosos/coroacao.jpg';
import carregamento from '../assets/pageDolorosos/carregamento.jpg';
import morte from '../assets/pageDolorosos/morte.jpg';
import aparecida from '../assets/aparecida.jpg';
import agradecimento from '../assets/agradecimento.jpg'

export default function Dolorosos() {
  return (
    <>
        <Header />
        <Carousel fade>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img 

          src={oferecimento}
          alt="First slide"
        />
        <Carousel.Caption className={`${styles.generic_div} ${styles.oferecimento}`}>
          <p>Pelo sinal da Santa Cruz, livrai-nos Deus, Nosso Senhor, dos nossos inimigos.</p>
          <p> Em nome do pai, do Filho e do Espírito Santo, amém.</p>
          <p>Divino Jesus, eu vos ofereço este terço que vou rezar, contemplando os mistérios da vossa redenção.</p>
          <p>Concedei-me, pela intercessão de Maria, vossa Mãe Santíssima, as virtudes que me são necessárias para bem rezá-lo</p>
          <p>E a Graça de ganhar as indulgências anexas a esta devoção.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img 

          src={credo}
          alt="First slide"
        />
        <Carousel.Caption className={styles.generic_div}>
          <p>Creio em Deus pai todo poderoso, criador do céu e da terra, e em Jesus cristo seu único filho, nosso senhor</p>
          <p>que foi concebido, pelo poder do Espírito Santo, nasceu da virgem Maria, padeceu sob pôncio Pilatos,</p>
          <p>foi crucificado, morto e sepultado, desceu a mansão dos mortos, ressuscitou ao terceiro dia subiu aos céus</p>
          <p>e está sentado a direita de Deus pai todo poderoso donde há de vir e julgar os vivos e os mortos.</p>
          <p>Creio no Espírito santo, na Santa igreja Católica, na comunhão dos santos,</p>
          <p>na remissão dos pecados na ressurreição da carne e na vida eterna. Amém.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img 
          src={agonia}
          alt="First slide"
        />
        <Carousel.Caption >
          <h3>1 - A Agonia de Jesus</h3>
          <p>Pai Nosso...</p>
          <p>1. Jesus foi ao monte das oliveiras. Ave Maria...</p>
          <p>2. Minha alma está triste até a morte. Ave Maria...</p>
          <p>3. Jesus se afasta para rezar. Ave Maria...</p>
          <p>4. Pai, afasta de mim este cálice. Ave Maria...</p>
          <p>5. Mas que seja feita a tua vontade. Ave Maria...</p>
          <p>6. Apareceu um anjo para confortá-lo. Ave Maria...</p>
          <p>7. Seu suor tornou-se gotas de sangue. Ave Maria...</p>
          <p>8. Ao voltar, viu os discípulos dormindo. Ave Maria...</p>
          <p>9. Orai e vigiai para não cair em tentação. Ave Maria...</p>
          <p>10. O espírito está pronto mas a carne é fraca. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={flagelacao}
          alt="Second slide"
        />

       <Carousel.Caption>
          <h3>2 - Jesus é flagelado</h3>
          <p>Pai Nosso...</p>
          <p>1. Levaram Jesus a Pilatos. Ave Maria...</p>
          <p>2. Tu és o Rei dos judeus? Ave Maria...</p>
          <p>3. Meu reino não é deste mundo. Ave Maria...</p>
          <p>4. Eu vim dar testemunho da verdade. Ave Maria...</p>
          <p>5. Quem é da verdade ouve a minha voz. Ave Maria...</p>
          <p>6. Era costume soltar um preso na páscoa. Ave Maria...</p>
          <p>7. Querem que eu solte o rei dos judeus? Ave Maria...</p>
          <p>8. Eles gritaram: queremos Barrabás. Ave Maria...</p>
          <p>9. Pilatos mandou flagelar Jesus. Ave Maria...</p>
          <p>10. Batiam-lhe na cabeça e cuspiam nele. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={coroacao}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>3 - A Coroação de Espinhos </h3>
          <p>Pai Nosso...</p>
          <p>1. Vestiram-no com um manto vermelho. Ave Maria...</p>
          <p>2. Teceram uma coroa de espinhos. Ave Maria...</p>
          <p>3. Colocaram na cabeça de Jesus. Ave Maria...</p>
          <p>4. Ajoelharam-se diante dele. Ave Maria...</p>
          <p>5. Salve o rei dos judeus. Ave Maria...</p>
          <p>6. Pilatos disse: eis o homem! Ave Maria...</p>
          <p>7. Eles gritavam: crucifica-o. Ave Maria...</p>
          <p>8. Mas que mal ele fez? Ave Maria...</p>
          <p>9. Gritaram mais forte: crucifica-o! Ave Maria...</p>
          <p>10. Pilatos lavou as mãos e o entregou. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={carregamento}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>4 - Jesus Carrega a Cruz </h3>
          <p>Pai Nosso...</p>
          <p>1. Levaram Jesus ao calvário. Ave Maria...</p>
          <p>2. Simão de Cirene vinha do campo. Ave Maria...</p>
          <p>3. Obrigaram-no a levar a cruz. Ave Maria...</p>
          <p>4. As mulheres batiam no peito e choravam. Ave Maria...</p>
          <p>5. Filhas de Jerusalém, não chorem por mim. Ave Maria...</p>
          <p>6. Chorai por vós e por vossos filhos. Ave Maria...</p>
          <p>7. Deram-lhe vinho misturado com fel. Ave Maria...</p>
          <p>8. Repartiram entre si as suas vestes. Ave Maria...</p>
          <p>9. Sortearam sua túnica. Ave Maria...</p>
          <p>10. Com Ele crucificaram dois ladrões. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={morte}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>5- Jesus Morre na Cruz </h3>
          <p>Pai Nosso...</p>
          <p>1. Pilatos mandou colocar um letreiro. Ave Maria...</p>
          <p>2. "Jesus nazareno rei dos judeus". Ave Maria...</p>
          <p>3. Ao pé da Cruz estava sua Mãe. Ave Maria...</p>
          <p>4. Perto dela, o discípulo amado. Ave Maria...</p>
          <p>5. Filho, eis aí a tua mãe. Ave Maria...</p>
          <p>6. Mulher, eis o teu filho. Ave Maria...</p>
          <p>7. O discípulo a acolheu consigo. Ave Maria...</p>
          <p>8. Tudo está consumado! Ave Maria...</p>
          <p>9. Inclinou a cabeça e morreu. Ave Maria...</p>
          <p>10. O véu se rasgou e a terra tremeu. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={aparecida}
          alt="Third slide"
        />

        <Carousel.Caption className={`${styles.generic_div} ${styles.gracas}`}>
          <p>Infinitas graças vos damos, Soberana Rainha, pelos benefícios que recebemos todos os dias de vossas mãos liberais.</p>
          <p>Dignai-vos agora e para sempre, tomar-vos debaixo de vosso poderoso amparo.</p>
          <p>E para mais vos obrigar, vos saudamos com a Salve Rainha.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img
          src={agradecimento}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Salve Rainha</h3>
          <p>Salve, Rainha, mãe de misericórdia, vida, doçura, esperança nossa, salve! </p>
          <p>A Vós bradamos, os degredados filhos de Eva. </p>
          <p>A Vós suspiramos, gemendo e chorando neste vale de lágrimas.</p>
          <p>Eia, pois, advogada nossa, esses Vossos olhos misericordiosos a nós volvei. </p>
          <p>E, depois deste desterro, nos mostrai Jesus, bendito fruto do Vosso ventre. </p>
          <p>Ó clemente, ó piedosa, ó doce Virgem Maria. </p>
          <p>Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Footer />
    </>
  )
}

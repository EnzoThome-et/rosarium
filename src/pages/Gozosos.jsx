import React from 'react';
import Header from '../components/Header';
import Carousel from 'react-bootstrap/Carousel';
import credo from '../assets/credo.jpg';
import oferecimento from '../assets/oferecimento.jpg';
import anunciacao from '../assets/pageGozosos/anunciacao.jpg';
import visitacao from '../assets/pageGozosos/visitacao.jpg';
import nascimento from '../assets/pageGozosos/nascimento.jpg';
import apresentacao from '../assets/pageGozosos/apresentacao.jpg';
import reencontro from '../assets/pageGozosos/reencontro.jpg';
import rainha from '../assets/salve_rainha.jpg';
import agradecimento from '../assets/agradecimento.jpg'
import styles from './slides.module.scss';
import Footer from '../components/Footer';

export default function Gozosos() {
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
          src={anunciacao}
          alt="First slide"
        />
        <Carousel.Caption className={styles.caption}>
          <h3>1 - Anunciação do Anjo a Nossa Senhora</h3>
          <p>Pai Nosso...</p>
          <p>1. Gabriel foi enviado por Deus. Ave Maria...</p>
          <p>2. A uma Virgem prometida em casamento. Ave Maria...</p>
          <p>3. O nome da Virgem era Maria. Ave Maria...</p>
          <p>4. O anjo a saudou: Ave cheia de graça. Ave Maria...</p>
          <p>5. O Senhor é contigo. Ave Maria...</p>
          <p>6. Não tenhas medo, Maria. Ave Maria...</p>
          <p>7. Eis que darás a luz um filho. Ave Maria...</p>
          <p>8. Maria perguntou: como se dará isso? Ave Maria...</p>
          <p>9. O Espírito Santo virá sobre ti. Ave Maria...</p>
          <p>10. Eis aqui a Serva do Senhor. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={visitacao}
          alt="Second slide"
        />

       <Carousel.Caption>
          <h3>2 - Visitação de Nossa Senhora</h3>
          <p>Pai Nosso...</p>
          <p>1. Maria partiu para a região montanhosa. Ave Maria...</p>
          <p>2. Entrou na casa de Zacarias. Ave Maria...</p>
          <p>3. Isabel ouviu a saudação de Maria. Ave Maria...</p>
          <p>4. A criança pulou de alegria no seu ventre. Ave Maria...</p>
          <p>5. Bendita és tu entre as mulheres. Ave Maria...</p>
          <p>6. Bendito o fruto do teu ventre. Ave Maria...</p>
          <p>7. De onde me vem esta honra? Ave Maria...</p>
          <p>8. Bem aventurada aquela que acreditou. Ave Maria...</p>
          <p>9. Porque se cumprirá o que o Senhor prometeu. Ave Maria...</p>
          <p>10. Minha alma glorifica ao Senhor. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={nascimento}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>3 - Nascimento do Menino Jesus </h3>
          <p>Pai Nosso...</p>
          <p>1. Completaram-se os dias para o parto. Ave Maria...</p>
          <p>2. Não havia lugar para eles na hospedaria. Ave Maria...</p>
          <p>3. Maria deu à luz ao menino. Ave Maria...</p>
          <p>4. O anjo apareceu aos pastores. Ave Maria...</p>
          <p>5. Hoje nasceu para vós um Salvador. Ave Maria...</p>
          <p>6. Glória a Deus nas alturas. Ave Maria...</p>
          <p>7. Vieram magos do oriente. Ave Maria...</p>
          <p>8. Encontraram o Menino com Maria. Ave Maria...</p>
          <p>9. Ofertaram outro, incenso e mirra. Ave Maria...</p>
          <p>10. E voltaram por outro caminho. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={apresentacao}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>4 - Apresentação no Templo </h3>
          <p>Pai Nosso...</p>
          <p>1. Levaram o Menino ao templo. Ave Maria...</p>
          <p>2. Ofertaram dois pombinhos. Ave Maria...</p>
          <p>3. Simeão tomou o Menino nos braços. Ave Maria...</p>
          <p>4. Deixai agora vosso servo ir em paz. Ave Maria...</p>
          <p>5. Meus olhos viram a salvação. Ave Maria...</p>
          <p>6. Este menino será sinal de contradição. Ave Maria...</p>
          <p>7. Revelará o pensamento de muitos corações. Ave Maria...</p>
          <p>8. Uma espada transpassará a tua alma. Ave Maria...</p>
          <p>9. A profetiza Ana louvava a Deus. Ave Maria...</p>
          <p>10. Ele crescia em sabedoria, idade e graça. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={reencontro}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>5- A Perda e o Encontro </h3>
          <p>Pai Nosso...</p>
          <p>1. Seus pais subiram a Jerusalém. Ave Maria...</p>
          <p>2. Ao fim da festa, eles voltaram. Ave Maria...</p>
          <p>3. Não acharam o menino na caravana. Ave Maria...</p>
          <p>4. Procuraram Jesus por três dias. Ave Maria...</p>
          <p>5. Encontraram o Menino no Templo. Ave Maria...</p>
          <p>6. Ele ensinava os doutores. Ave Maria...</p>
          <p>7. Todos estavam admirados. Ave Maria...</p>
          <p>8. Meu filho, estávamos a tua procura. Ave Maria...</p>
          <p>9. Devo estar na casa do meu Pai. Ave Maria...</p>
          <p>10. Maria meditava tudo no coração. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={rainha}
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

        <Carousel.Caption className={styles.generic_div}>
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

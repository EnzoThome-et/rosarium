import React from 'react';
import Header from '../components/Header';
import styles from './slides.module.scss';
import Footer from '../components/Footer';
import Carousel from 'react-bootstrap/Carousel';
import credo from '../assets/credo.jpg';
import oferecimento from '../assets/oferecimento.jpg';
import rainha from '../assets/salve_rainha.jpg';
import batismo from '../assets/pageLuminosos/batismo.jpg';
import bodas from '../assets/pageLuminosos/bodas.jpg';
import anuncio from '../assets/pageLuminosos/anuncio.jpg';
import eucaristia from '../assets/pageLuminosos/eucaristia.jpg';
import transfiguracao from '../assets/pageLuminosos/transfiguração.jpg';
import agradecimento from '../assets/agradecimento.jpg';

export default function Luminosos() {
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
          src={batismo}
          alt="First slide"
        />
        <Carousel.Caption className={styles.caption}>
          <h3>1 - Batismo de Jesus</h3>
          <p>Pai Nosso...</p>
          <p>1. João pregava no deserto. Ave Maria...</p>
          <p>2. Preparai os caminhos do Senhor. Ave Maria...</p>
          <p>3. Eu vos batizo com água. Ave Maria...</p>
          <p>4. Ele vos batizará com fogo. Ave Maria...</p>
          <p>5. Jesus vai ao encontro de João. Ave Maria...</p>
          <p>6. João aponta: Eis o Cordeiro de Deus. Ave Maria...</p>
          <p>7. Jesus é batizado no Jordão. Ave Maria...</p>
          <p>8. O Espírito Santo desceu como pomba. Ave Maria...</p>
          <p>9. Ouviu-se uma voz do céu. Ave Maria...</p>
          <p>10. Este é o meu filho amado. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={bodas}
          alt="Second slide"
        />

       <Carousel.Caption>
          <h3>2 - As bodas de Caná</h3>
          <p>Pai Nosso...</p>
          <p>1. Houve um casamento em Caná. Ave Maria...</p>
          <p>2. A Mãe de Jesus estava presente. Ave Maria...</p>
          <p>3. O vinho veio a faltar. Ave Maria...</p>
          <p>4. Eles não tem mais vinho. Ave Maria...</p>
          <p>5. Mulher, minha hora ainda não chegou. Ave Maria...</p>
          <p>6. Fazei o que Ele vos disser. Ave Maria...</p>
          <p>7. Enchei as talhas de água. Ave Maria...</p>
          <p>8. Tirai e levai ao mestre sala. Ave Maria...</p>
          <p>9. Jesus manifestou a sua glória. Ave Maria...</p>
          <p>10. Seus discípulos creram nEle. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={anuncio}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>3 - Anúncio do Reino de Deus </h3>
          <p>Pai Nosso...</p>
          <p>1. Convertei-vos e crede no Evangelho. Ave Maria...</p>
          <p>2. Fazei o bem aos que vos odeiam. Ave Maria...</p>
          <p>3. Não ajunteis tesouros na terra. Ave Maria...</p>
          <p>4. Quem me segue não anda nas trevas. Ave Maria...</p>
          <p>5. Quem não tem pecado atire a primeira pedra. Ave Maria...</p>
          <p>6. Entrai pela porta estreita. Ave Maria...</p>
          <p>7. Vai reconciliar-te com teu irmão. Ave Maria...</p>
          <p>8. Que tua esmola fique em segredo. Ave Maria...</p>
          <p>9. Quem se exalta será humilhado. Ave Maria...</p>
          <p>10. Quem me seguir, tome sua Cruz. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={transfiguracao}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>4 - Transfiguração de Jesus </h3>
          <p>Pai Nosso...</p>
          <p>1. Jesus chamou Pedro, Tiago e João. Ave Maria...</p>
          <p>2. Subiram uma alta montanha. Ave Maria...</p>
          <p>3. Transfigurou-se diante deles. Ave Maria...</p>
          <p>4. Seu rosto brilhava como o sol. Ave Maria...</p>
          <p>5. Suas vestes eram alvas como a luz. Ave Maria...</p>
          <p>6. Apareceram Moisés e Elias. Ave Maria...</p>
          <p>7. Mestre, é bom estarmos aqui. Ave Maria...</p>
          <p>8. Uma nuvem luminosa O cobriu. Ave Maria...</p>
          <p>9. Este é o meu Filho muito amado. Ave Maria...</p>
          <p>10. Escutai o que Ele diz. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={eucaristia}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>5- A instituição da Eucaristia </h3>
          <p>Pai Nosso...</p>
          <p>1. Os discípulos prepararam a Páscoa. Ave Maria...</p>
          <p>2. Jesus tirou o manto. Ave Maria...</p>
          <p>3. Colocou água numa bacia. Ave Maria...</p>
          <p>4. E lavou os pés uns dos outros. Ave Maria...</p>
          <p>5. Lavai os pés uns dos outros. Ave Maria...</p>
          <p>6. Assim saberão que sois meus discípulos. Ave Maria...</p>
          <p>7. Jesus tomou o pão e o abençoou. Ave Maria...</p>
          <p>8. Tomai todos e comei, isto é o meu Corpo. Ave Maria...</p>
          <p>9. Tomou o cálice e deu graças. Ave Maria...</p>
          <p>10. Este é o cálice do meu Sangue. Ave Maria...</p>
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

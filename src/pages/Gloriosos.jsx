import React from 'react';
import styles from './slides.module.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Carousel from 'react-bootstrap/Carousel';
import credo from '../assets/credo.jpg';
import oferecimento from '../assets/oferecimento.jpg';
import rainha from '../assets/salve_rainha.jpg';
import agradecimento from '../assets/agradecimento.jpg';
import ressureicao from '../assets/pageGloriosos/ressureicao.jpg';
import ascencao from '../assets/pageGloriosos/ascencao.jpg';
import pentecostes from '../assets/pageGloriosos/pentecostes.jpg';
import assuncao from '../assets/pageGloriosos/assuncao.jpg';
import coroacao from '../assets/pageGloriosos/coroacao.jpg'



export default function Gloriosos() {
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
          src={ressureicao}
          alt="First slide"
        />
        <Carousel.Caption className={styles.caption}>
          <h3>1 - Ressurreição de Jesus </h3>
          <p>Pai Nosso...</p>
          <p>1. As mulheres vão ao sepulcro. Ave Maria...</p>
          <p>2. O anjo desce do céu e remove a pedra. Ave Maria...</p>
          <p>3. A quem estão procurando?. Ave Maria...</p>
          <p>4. Ele não está aqui. Ressucitou! Ave Maria...</p>
          <p>5. Eles voltaram e contaram aos outros. Ave Maria...</p>
          <p>6. Pedro e João correram ao túmulo. Ave Maria...</p>
          <p>7. Viram as faixas de linho no chão. Ave Maria...</p>
          <p>8. Jesus apareceu no meio deles. Ave Maria...</p>
          <p>9. A paz esteja convosco. Ave Maria...</p>
          <p>10. Vejam minhas mãos e meus pés. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={ascencao}
          alt="Second slide"
        />

       <Carousel.Caption>
          <h3>2 - A Ascenção de Jesus</h3>
          <p>Pai Nosso...</p>
          <p>1. Jesus repreende a falta de fé. Ave Maria...</p>
          <p>2. Tomé, põe o dedo aqui. Ave Maria...</p>
          <p>3. Não seja incrédulo, mas fiel. Ave Maria...</p>
          <p>4. Tomé diz: meu Senhor e meu Deus. Ave Maria...</p>
          <p>5. Ide pelo mundo e pregai o Evangelho. Ave Maria...</p>
          <p>6. Quem crer e for batizado será salvo. Ave Maria...</p>
          <p>7. Quem não crer, será condenado. Ave Maria...</p>
          <p>8. Vós sereis minhas testemunhas. Ave Maria...</p>
          <p>9. Estarei convosco todos os dias. Ave Maria...</p>
          <p>10. Jesus foi elevado aos céus. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={pentecostes}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>3 - A Descida do Espírito Santo </h3>
          <p>Pai Nosso...</p>
          <p>1. Os discípulos perseveraram na oração. Ave Maria...</p>
          <p>2. Com Maria, a Mão de Jesus. Ave Maria...</p>
          <p>3. Chegou o dia de Pentecostes. Ave Maria...</p>
          <p>4. Estavam todos no mesmo lugar. Ave Maria...</p>
          <p>5. Veio do céu um forte ruído. Ave Maria...</p>
          <p>6. Surgiram línguas como de fogo. Ave Maria...</p>
          <p>7. Que pousavam sobre eles. Ave Maria...</p>
          <p>8. Ficaram repletos do Espírito Santo. Ave Maria...</p>
          <p>9. Começaram a falar em outras línguas. Ave Maria...</p>
          <p>10. A promessa é para vós e vossos filhos. Ave Maria...</p>
          <p>Glória ao Pai...</p>
          <p>Ó meu Jesus...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={600000} className={styles.slide}>
        <img

          src={assuncao}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>4 - Assunção de Nossa Senhora </h3>
          <p>Pai Nosso...</p>
          <p>1. Minha alma engrandece o Senhor. Ave Maria...</p>
          <p>2. Porque Ele viu a pequenez de sua serva. Ave Maria...</p>
          <p>3. As gerações me chamarão de bendita. Ave Maria...</p>
          <p>4. O Poderoso fez em mim maravilhas. Ave Maria...</p>
          <p>5. Santo é o seu nome!. Ave Maria...</p>
          <p>6. Seu amor chega a todos que o temem. Ave Maria...</p>
          <p>7. Demonstrou o poder de Seu braço. Ave Maria...</p>
          <p>8. Derruba os poderosos e exalta os humildes. Ave Maria...</p>
          <p>9. Saciou os famintos e despediu os ricos. Ave Maria...</p>
          <p>10. Socorreu a Israel como prometeu a Abraão. Ave Maria...</p>
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
        <h3>5- Coroação da Virgem Maria </h3>
          <p>Pai Nosso...</p>
          <p>1. Apareceu no céu um grande sinal. Ave Maria...</p>
          <p>2. Uma mulher vestida de sol. Ave Maria...</p>
          <p>3. A lua debaixo de seus pés. Ave Maria...</p>
          <p>4. Com uma coroa de doze estrelas. Ave Maria...</p>
          <p>5. Apareceu um dragão de cor de fogo. Ave Maria...</p>
          <p>6. O dragão queria devorar o seu Filho. Ave Maria...</p>
          <p>7. Seu Filho foi levado para junto de Deus. Ave Maria...</p>
          <p>8. Houve uma batalha no Céu. Ave Maria...</p>
          <p>9. Miguel e seus anjos combateram o dragão. Ave Maria...</p>
          <p>10. Eles venceram pelo sangue do Cordeiro. Ave Maria...</p>
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

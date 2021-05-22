import {Background, Parallax} from 'react-parallax';
import './App.css';

function App() {
  const Container = () => (
      <Parallax strength={300}
                blur={{ min: -15, max: 15 }}
                bgImage="../O.png"
                bgImageAlt="../U.png">


          <div style={{ height: '100VH', width:"100vw" , textAlign:"center",lineHeight:"100vh",fontSize:"70px",fontWeight:"bold"}} >
              UBER IUT
          </div>
      </Parallax>);

  return (
    <>
    <Container/>
        <body>
        <h1>UBER IUTs</h1>

        <p>
            UBER IUTs est un jeu compétitif de livraisons de repas au tour par tour jouable de 1 à 4 joueurs. Dans ce jeu, vous devez diriger deux livreurs dans les rues d’une ville générée
            aléatoirement afin de récupérer et de livrer (dans les temps) un maximum de repas.
        </p>

        <p>
            Ainsi, lors de l'évènement des "presque 24h des IUTs, il a été demandé à chaque équipe, de réaliser une intelligence artificielle adaptée au jeu. Notre but est donc de développer l'IA la plus optimisée afin de d'obtenir le meilleur score."
        </p>

        <h2>Le jeu</h2>
        <ul>
            <li>
                <h3>La carte</h3>
                <p>
                    La carte du jeu est toujours une carte carrée de taille 31x31. Les bords de la carte sont
                    toujours des cases de routes. Toutes les cases de routes sont accessibles par tous les
                    joueurs. Les joueurs apparaissent toujours aux 4 coins de la carte dans l’ordre suivant
                    (nord-ouest, sud-est, sud-ouest, nord-est) :
                </p>

            </li>

            <li>
                <h3>Les cases</h3>
                <p>Il existe 4 types de cases différentes :</p>
                <img src="../cases.png" alt="cases"/>
                    <p>
                        Les cases vides, les routes, les restaurants et les miasons/appartements.
                    </p>
            </li>

            <li>
                <h3>Les joueurs/livreurs</h3>
                <p>
                    Les livreurs ne peuvent se déplacer que sur les cases de routes. Pour récupérer une commande ou pour le livrer, un livreur doit se placer sur une case de route située juste à côté du restaurant ou de la maison. Plusieurs livreurs peuvent occuper la même case. A chaque tour, chaque joueur dispose de 8 points d’action (PA) utilisables pour faire agir ses deux livreurs. Toute action d’un livreur (se déplacer d’une case, prendre une commande, livrer une commande) consomme 1 PA. Un livreur peut transporter jusqu’à 3 livraisons simultanément et toute livraison prise doit être livrée.
                </p>

                <p>
                    Des livraisons apparaissent aléatoirement durant la partie. Une livraison part systématiquement d’un restaurant et se termine systématiquement à une maison. Les livraisons doivent être réalisées dans un certain délai. Toutes les livraisons ne rapportent pas le même nombre de points et ne disposent pas du même délai de livraison (ces montants dépendant principalement de la distance à vol d’oiseau entre le restaurant et le client mais pas que…). Un restaurant peut proposer plusieurs livraisons (5 au maximum), une même maison peut être la cible de plusieurs livraisons (pas de maximum). Jusqu’à 30 livraisons peuvent être proposées simultanément sur la carte.
                </p>
            </li>

            <li>
                <h3>Calcul du score</h3>
                <p>
                    Chaque livraison livrée dans les temps rapporte un nombre de points égal à sa valeur. Chaque livraison livrée en retard fait perdre un nombre de points proportionnel à sa valeur. Une partie dure 50 tours et à la fin de celle-ci, les livraisons en retard présentes dans les sacs des livreurs seront comptabilisées. Les livraisons n’ayant pas été prises et celles présentes dans les sacs des livreurs mais n’étant pas (encore) en retard ne seront pas comptabilisées.
                </p>
            </li>
        </ul>


        <footer>
            © 2021 Copyright : l'équipe Py Long de l'IUT de Calais
        </footer>
        </body>


    </>
  );
}

export default App;

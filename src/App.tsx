import React, {useState} from 'react';
import lagarto from './assets/img/lagarto.png';
import papel from './assets/img/papel.png';
import piedra from './assets/img/piedra.png';
import spock from './assets/img/spock.png';
import tijera from './assets/img/tijera.png';
import './App.css';

const PPT: React.FC = () => { //se declara la constante PPT, que sería piedra, papel y tijera
    const [playerChoice, setPlayerChoice] = useState<string | null>(null);
    const [computerChoice, setComputerChoice] = useState<string | null>(null);
    const [result, setResult] = useState<string | null>(null); 
    const [showOptions, setShowOptions] = useState<boolean>(false);

    
    const empezarJuego = () => {
      setShowOptions(!showOptions);

    };

    const handlePlayerChoice = (choice: string) => {
      setPlayerChoice(choice);
    };
    
    const handlePlay = () => {
        const choices = ['piedra', 'papel', 'tijera', 'lagarto', 'spock'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
        setComputerChoice(computerChoice);
        setResult(getResult(playerChoice, computerChoice));
    };
    
    const getResult = (playerChoice: string | null, computerChoice: string | null) => {
        if (!playerChoice || !computerChoice) {
          return null;
        }
    
        if (playerChoice === computerChoice) {
            return 'Empate';
          } else if (
            (playerChoice === 'piedra' && computerChoice === 'tijera') ||
            (playerChoice === 'papel' && computerChoice === 'piedra') ||
            (playerChoice === 'piedra' && computerChoice === 'lagarto') ||
            (playerChoice === 'lagarto' && computerChoice === 'Spock') ||
            (playerChoice === 'Spock' && computerChoice === 'tijera') ||
            (playerChoice === 'tijera' && computerChoice === 'lagarto') ||
            (playerChoice === 'lagarto' && computerChoice === 'papel') ||
            (playerChoice === 'papel' && computerChoice === 'Spock') ||
            (playerChoice === 'Spock' && computerChoice === 'piedra') ||
            (playerChoice === 'piedra' && computerChoice === 'tijeras')

          ) {
            return 'Ganaste';
          } else {
            return 'Perdiste';
          }
        };
      return(
        <div className="App">
          <header className="App-header">
          </header>
          <section>
              <div id="inicio">
                <h1 id="titulo">Piedra, papel, tijera, lagarto, spock</h1>
                <p id="quieresjugar">¿Quieres jugar?</p>
                <div id="normativa">
                  <p>La normativa es muy sencilla, déjame que te explique:</p>
                  <ul>
                    <li>Las tijeras cortan al papel.</li>
                    <li>El papel cubre a la piedra.</li>
                    <li>La piedra aplasta al lagarto.</li>
                    <li>El lagarto envenena a Spock.</li>
                    <li>Spock destroza las tijeras.</li>
                    <li>Las tijeras decapitan al lagarto.</li>
                    <li>El lagarto se come el papel.</li>
                    <li>El papel refuta a Spock.</li>
                    <li>Spock vaporiza la piedra.</li>
                    <li>La piedra aplasta a las tijeras.</li>
                  </ul>
                </div>
              <button onClick={empezarJuego}>Empezar juego</button>
              </div>
              {showOptions && <div id="juego">
                  <div id="opciones">
                    <p id="opcion">Elige una opción:</p>
                    <div id="imagenes">
                      <img src={lagarto} alt="Lagarto" id="lagarto" onClick={() => handlePlayerChoice('lagarto')} />
                      <img src={papel} alt="Papel" id="papel" onClick={() => handlePlayerChoice('papel')} />
                      <img src={piedra} alt="Piedra" id="piedra" onClick={() => handlePlayerChoice('piedra')} />
                      <img src={spock} alt="Spock" id="spock" onClick={() => handlePlayerChoice('spock')} />
                      <img src={tijera} alt="Tijera" id="tijera" onClick={() => handlePlayerChoice('tijera')} />
                    </div>
                  <button onClick={handlePlay}>Jugar</button>
                </div>
              </div>}
              {playerChoice && computerChoice && result && (
                <div>
                  <p>Tu elección: {playerChoice}</p>
                  <p>Elección de la computadora: {computerChoice}</p>
                  <p>Resultado: {result}</p>
                </div>
              )}
          </section>
        </div>
      );
    }
export default PPT;
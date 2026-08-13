import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


function App() {

  const [tamanho, setTamanho] = useState("");
  const [senha, setSenha] = useState("");
  const [semNumeros, setSemNumeros] = useState(false);
  const [semLetras, setSemLetras] = useState(false);
  const [semEspeciais, setSemEspeciais] = useState(false);
  
  function gerarSenha(tamanho) {


    let numeros = "0123456789";
    let simbolos = "!@#$%¨&*()_-+=<>}{[]|/";
    let minusculas = "abcdefghijklmnopqrstuvwxyz";
    let maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let todos = "";
    let senha = "";

    if (!semNumeros) {
      todos += numeros;
    }

    if (!semLetras) {
      todos += maiusculas + minusculas;
    }
    
    if (!semEspeciais) {
      todos += simbolos;
    }

    if (todos === "") {
      alert("Selecione pelo menos um tipo de caractere.");
      return;
    }

    if (tamanho <= 20) {
        for(let i = 0; i < tamanho; i++) {
        let indice = Math.floor(Math.random() * todos.length);
        senha += todos[indice];
      }
      setSenha(senha);  
    } else {
      alert("O limite máximo permitido é 20 caracteres.");
      setTamanho("");
    }

  }

  return (
    <div className="flex flex-col h-lvh flex justify-center items-center">
        <div>
          <h1 className="pb-3 text-2xl"><strong>Gerador de <span className="text-blue-700">Senhas</span></strong></h1>
        </div>

        <div className="bg-indigo-200 w-80 rounded-xl p-4">

          <div className="flex gap-2">
            <Input className="w-full" 
            type="number"
            placeholder="Digite a quantidade"
            onChange={(e) => setTamanho(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
              gerarSenha(tamanho);
              }
            }}
            />

            <div>     
            <Button onClick={() => gerarSenha(tamanho)}>Gerar</Button>
            </div>
          </div> 

         
          <div className="mt-4">
            <p className="bg-red-100 rounded-lg p-2 text-red-700"><strong>{senha}</strong></p>
          </div>       
        </div>    

        <label>
          <input
            type="checkbox"
            checked={semNumeros}
            onChange={(e) => setSemNumeros(e.target.checked)}
          />
          Sem números
        </label>

        <label>
          <input
            type="checkbox"
            checked={semLetras}
            onChange={(e) => setSemLetras(e.target.checked)}
          />
          Sem letras
        </label>

        <label>
          <input
            type="checkbox"
            checked={semEspeciais}
            onChange={(e) => setSemEspeciais(e.target.checked)}
          />
          Sem especiais
        </label>

    </div>
  
    
  );

  
}

export default App 

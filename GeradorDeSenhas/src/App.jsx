import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


function App() {

  const [tamanho, setTamanho] = useState("");
  const [senha, setSenha] = useState("");
  
  function gerarSenha(tamanho) {


    let numeros = "0123456789";
    let simbolos = "!@#$%¨&*()_-+=<>}{[]|/";
    let minusculas = "abcdefghijklmnopqrstuvwxyz";
    let maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let todos = numeros + simbolos + maiusculas + minusculas;

    let senha = "";

    for(let i = 0; i < tamanho; i++) {
      let indice = Math.floor(Math.random() * todos.length);
      senha += todos[indice];
    }
    setSenha(senha);  
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

          
            
    </div>
  );

  
}

export default App

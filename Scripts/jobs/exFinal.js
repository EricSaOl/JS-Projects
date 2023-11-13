let choice
let jobs = []

let listIt = []
let candidate = []
i=0 
let ex =""
let indice = ""
let exJob
let c
let cnd=""
//---------------------------------------------------------------------------------------------------------------------------------
function criarVaga(){
    job.name = prompt("Nome da vaga a ser criada:")
    job.data = prompt("Data limite de inscrição:")
    job.description = prompt("Forneça uma descrição da vaga:")
    job.candidate = []
    
    return 0
}
function newCandidate(){
    cnd = prompt("Nome do candidato: ")
    indice = parseInt(prompt("Indice da vaga requerida: "),10)
    c = confirm("Deseja aplicar para essa vaga\n\n?" + "Vaga: " +jobs[indice].name + "\nData limite da vaga: "+jobs[indice].data+"\nDescrição da vaga"+ jobs[indice].description)
    jobs[indice].candidate.push(cnd)
 return c;
}
function listAll(){
    for(i=1;i<jobs.length;i++)
    listIt.push("Vaga: " + jobs[i].name + "\n")

    return listIt
}
//---------------------------------------------------------------------------------------------------------------------------------

alert("Seja bem vindo ao site: Vaga de empregos")
do {
    choice = prompt(
    "O que deseja fazer?\n\n"+
    "1- Listar vagas disponiveis;\n"+
    "2- Criar uma nova vaga;\n"+
    "3- Visualizar uma vaga;\n"+
    "4- Inscrever um candidato em uma vaga\n"+
    "5- Excluir uma vaga;\n"+
    "6- Sair;"
)
    switch(choice){
   case "1": 
    listAll()
    alert(listIt)
   
    ;
   break; 
   case "2": 
   do {
    var job = {}
    criarVaga()
    c = confirm("Suas informações estão corretas?\n\n"+ "Nome da vaga: "+job.name+"\n"+"Data da vaga: "+job.data+"\n"+ "Descrição da vaga: "+job.description+"\n")
   } while (c === false);
   jobs.push(job)
   break;
   case "3": ;
   break; 
   case "4": 
   
   if(newCandidate() === true){
    alert("Inscrição bem sucedida!")
   }
   else{
    alert("Inscrição cancelada.")
   }
   ;
   break;
   case "5": 
   ex = parseFloat(prompt("Qual o indice da vaga a ser excluida?"),10);
   
   exJob = confirm("Deseja realmente excluir essa vaga?\n\n"+"Vaga: "+ jobs[ex].name +"\nData de emcerramento: "+ jobs[ex].data + "\nDescrição: " + jobs[ex].description)
   if (exJob === true){
    jobs.splice(ex,1)
   }
   break; 
   case "6": 
   alert("Encerrando sistema....");
   default: 
   //alert("Opção inválida.Tente novamente.");
   
}
} while (choice!=="6");

export class Model {
    user;
    items;

    constructor(){
         this.user = "İsmail";
         this.items = [
                        new TodoItems("Kahvaltı",true),
                        new TodoItems("Spor",false),
                        new TodoItems("Fatura",false),
                        new TodoItems("Sinema",false)
                      ];
    }
}
export class TodoItems{
    aciklama;
    aksiyon;
    constructor(aciklama,aksiyon){
        this.aciklama = aciklama;
        this.aksiyon = aksiyon;
    }
}
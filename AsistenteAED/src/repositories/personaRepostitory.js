class Persona {
    constructor(entity) {
        this.entity = entity;
      }
    
      getAll(){
          return this.entity.findAll(); 
      }
    
      get(id){
        return this.entity.find
      }
    
      create(){}
    
      update(){}
}

module.exports = Persona;
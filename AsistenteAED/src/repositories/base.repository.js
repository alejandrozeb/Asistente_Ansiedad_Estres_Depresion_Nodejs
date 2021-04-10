class baseRepository {
  constructor(entity) {
    this.entity = entity;
  }

  getAll(){
      return this.entity.findAll(); 
  }
}

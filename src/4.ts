class Key {
    constructor( private signature:number=0){
        if(this.signature === 0){
            this.signature= Math.random()
        }
    };

   public getSignature():number{
        return this.signature
    };
};

class Person { 
    constructor( private key: Key ){};

    getKey():number{
        
      return this.key.getSignature(); 
    };
};

 abstract class House{
  public door:boolean=false;;
  public tenents:object[]=[];

  constructor(protected key:Key){}

  public comeIn(person:object):void{
    if(this.door ){
        this.tenents.push(person)
    } 
  };

  public abstract OpenDoor(key:number):boolean;
};

class MyHouse extends House {

  public  OpenDoor(key){
        if(key === this.key.getSignature()){
            return  this.door=true;
        } return this.door= false
    };
};

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());
house.comeIn(person);

console.log(key.getSignature());
console.log(person.getKey())
console.log(house.OpenDoor(person.getKey()))
console.log(house.door)
console.log(house.tenents)


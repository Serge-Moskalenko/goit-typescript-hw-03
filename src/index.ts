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
    constructor( private key:any ){};

    getKey():number{
        
       return this.key.signature; 
    };
};

type Door= false|true;

 abstract class House{
  public door:Door;
  public tenents:object[]=[];
  constructor(protected key){
    this.key=key;
  }

  public comeIn(person:object):void{
    if(this.door ){
        this.tenents.push(person)
    } 
  };

  public abstract OpenDoor(key:number):boolean;
};

class MyHouse extends House {
    constructor(public key){
        super(key)
    }

  public  OpenDoor(key){
        if(key === this.key.signature){
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


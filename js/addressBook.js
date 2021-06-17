class AddressBook{

    //getter and Settert for name
    get name() {return this._name;}
    
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is invalid';
    }
  
    //getter and setter for address
    get address(){return this._address;}
  
    set address(address){
      let addressRegex = RegExp('^[A-Za-z]{2,}$');
      if(addressRegex.test(address))
            this._address = address;
      else throw 'Address is invalid';
    }
  
    //getter and setter for Phone Number
    get phone(){return this._phone;}
    set phone(phone){
      let phoneRegex = RegExp('^[0-9]{2}[\\s][789]{1}[0-9]{9}$');
      if(phoneRegex.test(phone))
            this._phone = phone;
      else throw 'Phone Number is invalid';      
    }
  
    //getter and setter for Zip code
  
    get zip(){return this._zip;}
  
    set zip(zip){
      let zipRegex = RegExp('^[0-9]{3}[\\s][0-9]{3}$');
          if(zipRegex.test(zip))
              this._zip = zip; 
          else throw 'Zip is invalid';
    }
    //getter and setter for Zip code
    get city(){ return this._city; }
    set city(city){
        this._city=city;
    }
    //getter and setter for Zip code
    get state(){ return this._state; }
    set state(state){
        this._state=state;
    }
  
    toString(){
      return "Name: " +this.name+ ", Address: "+this.address+ ", phone Number: "+this.phone+ ", Zop_code: "+this.zip+
              ", City: "+this.city+ ",State: "+this.state;
    }
  
  }
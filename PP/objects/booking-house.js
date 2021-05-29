"use strict";

(function() {

    var CONTINENT = {
      ASIA: "AS",
      EUROPE: "EU",
      NORTH_AMERICA: "NA",
      SOUTH_AMERICA: "SA",
      AUSTRALIA: "AU",
      AFRICA: "AF",
    }

    function Country(name, odds, continent) {
      this.name = name;
      this.odds = odds;
      this.continent = continent;

      this.getFormatedName = function() {
        var formatted = this.name[0];

        for(var i = 1; i < this.name.length; i++) {
          var current = this.name[i];

          switch (current) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
              continue;
          }

          formatted += current;
          break;
        }

        return formatted.toUpperCase();
      };
    }

    function Person(name, surname, dateOfBirth) {
      this.name = name;
      this.surname = surname;
      this.dateOfBirth = dateOfBirth;
      
      this.getInfo = function() {
        return this.name + " " + this.surname + ", " + (2021 - this.dateOfBirth.year) + " years"; 
      };
    }

    function Player(person, betAmount, country) {
      this.person = person;
      this.betAmount = betAmount;
      this.country = country;

      this.getBetInfo = function() {
        return (this.country.getFormatedName() + ", " + this.betAmount * this.country.odds + " eur, " + this.person.getInfo());
      };
    }

    function Address(street, number, zipCode, city) {
      this.street = street;
      this.number = number;
      this.zipCode = zipCode;
      this.city = city;

      this.getFormatedAddress = function() {
        return this.street + ", " + this.zipCode + " " + this.city; 
      }
    }

    function BettingPlace(address) {
      this.address = address;
      this.players = [];

      this.addPlayer = function(player) {
        this.players[this.players.length] = player;
      }

      this.getBettingPlaceInfo = function() {
        var formatAddress = this.address.street + ", " + this.address.zipCode + " " + this.address.city;
        var sum = 0;

        for(var i = 0; i < this.players.length; i++) {
          var player = this.players[i];
          sum += player.betAmount;
        }
        return formatAddress + ", sum of all bets: " + sum + " eur";
      };
    }

    function BettingHouse(competition, places, playerNumber) {
      this.competition = competition;
      this.places = places;
      this.playerNumber = playerNumber;

      this.getBettingHouseInfo = function() {
        return competition + ", " + places + " betting places," + playerNumber + " bets";
      }
    }

    var serbia = new Country("Serbia", 5, CONTINENT.EUROPE);
    var croatia = new Country("Croatia", 7, CONTINENT.EUROPE);
    var southAfrica = new Country("South Africa", 3, CONTINENT.AFRICA);

    var person1 = new Person("Bogdan", "Manasijevic", {day: 9, month: 2, year: 1988});
    var person2 = new Person("Bogdan", "Manasijevic", {day: 9, month: 2, year: 1992});
    var person3 = new Person("Bogdan", "Manasijevic", {day: 9, month: 2, year: 1991});
    var person4 = new Person("Bogdan", "Manasijevic", {day: 9, month: 2, year: 1996});

    var address = new Address("Nemanjina", 4, 11000, "Belgrade");

    var player1 = new Player(person1, 240, serbia);
    var player2 = new Player(person2, 100, southAfrica);
    var player3 = new Player(person3, 120, croatia);
    var player4 = new Player(person4, 160, croatia);

    var bettingHouse1 = new BettingHouse("Football world Cup Winner", 2, countPlayerNumber());

    var bettingPlace1 = new BettingPlace(address);
    var bettingPlace2 = new BettingPlace(address);

    bettingPlace1.addPlayer(player1);
    bettingPlace1.addPlayer(player2);
    bettingPlace1.addPlayer(player3);

    bettingPlace2.addPlayer(player3);
    bettingPlace2.addPlayer(player4);
    
    //console.log(bettingPlace1.players);
    console.log(bettingHouse1.getBettingHouseInfo());
    console.log(bettingPlace1.getBettingPlaceInfo());
    console.log()
    console.log(bettingPlace2.getBettingPlaceInfo());

  })();
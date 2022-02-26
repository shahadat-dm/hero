const kibria = {
    id: 102,
    money: 70000,
    name: 'Kibria',
    treatDey: function(expense){
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id: 222,
    money: 60000,
    name: 'Hero Balam'
}

const heroGalam = {
    id: 202,
    money: 5000,
    name: 'Hero Galam'
}
// student.treatDey(1000)

const heroTreatDey = kibria.treatDey.bind(heroBalam);

heroTreatDey(10);
heroTreatDey(1710);

const heroGalamTreatDey = kibria.treatDey.bind(heroGalam);
heroGalamTreatDey(740);
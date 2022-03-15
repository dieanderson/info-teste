const Veiculo = require('../src/models/veiculos')

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../src/server')
let should = chai.should()

chai.use(chaiHttp)

describe('Veiculos', function() {
    
    this.beforeEach(function(done){
        Veiculo.deleteMany({}, function(error) {
            done()
        })
    })

    /** 
    * Teste da rota: /GET
    */
    describe('/GET veiculos', function() {
        it('Deve retornar todos os veiculos', function(done) {
            chai.request(server)
            .get('/api/veiculos')
            .end(function(error, res) {                
                res.should.have.status(200)
                res.body.should.be.a('array')
            done()
            })
        })
    })

    /** 
    * Teste da rota: /GET/:id
    */
     describe('/GET/:id veiculo', function() {
        it('Deve retornar o veiculo dado o id', function(done) {
            const veiculo = new Veiculo({
                placa: 'MNO-2530',
                chassi: '83637465757657',
                renavan: '374747548',
                modelo: 'GOL',
                marca: 'VW',
                ano: '2019',
            })
            veiculo.save(function(error, veiculo) {
                chai.request(server)
                .get('/api/veiculos/' + veiculo.id)
                .send(veiculo)
                .end(function(error, res) {
                    res.should.have.status(200)
                done()
                })
            })
        })
    })

    /** 
     * Teste da rota: /POST
     */
    describe('/POST veiculo', function() {
                
        it('Deve criar um novo veiculo', function(done) {
            const veiculo = {
                placa: 'ABC-1520',
                chassi: '9457585959559',
                renavan: '64784955',
                modelo: 'FRONTIER',
                marca: 'NISSAN',
                ano: '2022',
            } 
            chai.request(server)
            .post('/api/veiculos')
            .send(veiculo)
            .end(function(error, res) {
                res.should.have.status(200)
            done()
            })
        })
    })

    /** 
     * Teste da rota: /PUT/:id
     */
    describe('/PUT/:id veiculo', function(){

        it('Deve atualizar o veiculo dado o id', function(done){
            const veiculo = new Veiculo({
                placa: 'MNO-2530',
                chassi: '83637465757657',
                renavan: '374747548',
                modelo: 'GOL',
                marca: 'VW',
                ano: '2019',    
            })
            veiculo.save(function(error, veiculo){
                chai.request(server)
                .put('/api/veiculos/' + veiculo.id)
                .send({modelo: 'POLO', ano: '2015'})
                .end(function(error, res){
                    res.should.have.status(200)
                done()
                })
            })
        })
    })

    /** 
     * Teste da rota: /DELETE/:id
     */
    describe('/DELETE/:id veiculo', function(){
        it('Deve excluir o veiculo dado o id', function(done){
            const veiculo = new Veiculo({
                placa: 'MNO-2530',
                chassi: '83637465757657',
                renavan: '374747548',
                modelo: 'GOL',
                marca: 'VW',
                ano: '2019',     
            })
            veiculo.save(function(error, veiculo){
                chai.request(server)
                .delete('/api/veiculos/' + veiculo.id)
                .end(function(error, res){
                    res.should.have.status(200)
                done()
                })
            })
        })
    })
    




    
})
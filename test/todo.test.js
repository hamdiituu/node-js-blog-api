// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../app');
//
// chai.should();
// chai.use(chaiHttp);
//
// /*
// *     Create
// *     Get By Id
// *     Get
// *     Update
// *     Delete
// * */
//
// describe('todo route test', () => {
//
//     let todoSuccess;
//     let todoWarning;
//     let todoTestId;
//
//     beforeEach(()=>{
//         todoSuccess = {
//             title: 'Test First Todo',
//             description : 'Test First Todo description',
//             done : false
//         };
//         todoWarning = {
//             title:'12',
//             completed: false
//         }
//     })
//
//     describe('POST api/todo', () => {
//         it('should crete new todo success', function (done) {
//
//             chai.request(app)
//                 .post('/api/todo')
//                 .send(todoSuccess)
//                 .end((err, res) => {
//                     console.log(res.body);
//                     res.should.have.status(201);
//                     res.body.should.be.a('object');
//                     res.body.should.have.property('data');
//                     res.body.should.have.property('message');
//                     res.body.should.have.property('success').equal(true);
//                     res.body.should.have.property('error').equal(null);
//                     done();
//                 });
//
//         });
//     });
//
// });

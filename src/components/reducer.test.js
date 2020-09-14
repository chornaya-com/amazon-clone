import {reducer} from "./reducer";

describe('reducer', ()=> {
   it('should set user and return new state', () => {
       const testUser = {};
       const state = {};

       const newState = reducer(state, {
           type: 'SET_USER',
           user: testUser,
       });

       expect(newState.user).toBe(testUser);

       // check new instance for the state created
       expect(newState).not.toBe(state);
   });

   it('should return same state if nothing changed', () => {
       const state = {};
       const newState = reducer(state, {
           type: 'DUMMY_ACTION'
       });

       expect(newState).toBe(state);
   })
});
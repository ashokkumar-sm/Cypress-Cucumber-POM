import Loginpageobject from '../PageObject/Loginpageobject'
import Homepageobject from '../PageObject/Homepageobject'


const loginpageobject = new Loginpageobject();
const homepageobject = new Homepageobject();


    Given ('Browse URL',()=>{

    loginpageobject.browselogin()

    })

    Then ('Enter credential',(datatable)=>{
    datatable.hashes().forEach(element =>{
        loginpageobject.entercredentials(element.username,element.password)

    });
    })



    Then ('Select loginbutton',()=>{

    loginpageobject.Loginbutton().click()

    })

    And ('Ensure user is loggedin',()=>{

        homepageobject.verifylogin()
    
        })

    


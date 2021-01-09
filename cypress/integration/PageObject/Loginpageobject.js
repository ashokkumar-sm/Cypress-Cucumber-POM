class Loginpageobject{


    browselogin()
    {

        return cy.visit('https://demosite.executeautomation.com/Login.html')

    }

    entercredentials(username,password)
    {
        
        cy.get('input[name="UserName"]').type(username)
        cy.get('input[name="Password"]').type(password)

    }

    Loginbutton()
    {

        return cy.get('input[name="Login"]')
    }



}
export default Loginpageobject
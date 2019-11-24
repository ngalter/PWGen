function genPassword()
{ 
    var passWord = "Your Password";
    var x = false;
    var y = true;
    var passArray = [];
    var randPass = [];
    var passLength = "";
    var passLenVal = 0;
    var passSpecBool = true;
    var passNumberBool = true;
    var passUpperBool = true;
    var passLowerBool = true;
    var passNumber = [0,1,2,3,4,5,6,7,8,9];
    var passSpecial = ["!", "#", "$", "%", "&", "(", ")", "*", "-", "<", "=", ">", "?", "@"]
    var passLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var passUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var password = "yourPassword";
    var len = 0;



   if (y)
   {
       document.getElementById("textArea").value = "Your Password";
       var passWord = "Your Password";
       var x = false;
       var passArray = [];
       console.log("CLEAR ALL");
       console.log(passArray.length + " passArray Length");
       var randPass=[];
       console.log(randPass.length + " randPass Length");
   }
   if (y)
   {  
       x = false; 
       randPass = [];
       passWord = "Your Password";
       console.log(passWord + " here");
       document.getElementById("textArea").innerHTML = passWord;  
       passWord = "";
       passLength=prompt("Enter a value between 8 and 128 for the length of your password.");
       passLenVal=parseInt(passLength);
       console.log(passLength);
       console.log(passLenVal);
   
       if (!passLenVal)
           {
                   alert("You must enter a value. Please try again");
       }
       else if (typeof passLenVal !== "number")
           {
                   alert("You must enter a value. Please try again");
           }
       else if (passLenVal <=7 || passLenVal >= 129)
           {
                   alert("Enter a value between 8 and 128 for the length of your password. Please try again.");
           }
       else if (passLenVal >= 8 && passLenVal <= 128)
           {    
               passSpecBool = confirm("Would you like your password to contain special characters?")
               if (passSpecBool) 
               {   
                   x = true;
                   for (i=0; i<passSpecial.length; i++ )
                   {
                       passArray.push(passSpecial[i]);
                   }
               }
           
           
               passNumberBool = confirm("Would you like your password to contain numeric characters?")
               if (passNumberBool)
               {
                   x = true;
                   for (i=0; i<passNumber.length; i++ )
                   {
                       passArray.push(passNumber[i]);
                   }
               }
           
           
               passUpperBool = confirm("Would you like your password to contain upper case characters?")
               if (passUpperBool)
               {
                   x = true;
                   for (i=0; i<passUpper.length; i++ )
                   {
                       passArray.push(passUpper[i]);
                   }
               }
           
               if (x) 
               {
                   passLowerBool = confirm("Would you like your password to contain lower case characters?")
                   if (passLowerBool) 
                   {
                       for (i=0; i<passLower.length; i++ )
                       {
                           passArray.push(passLower[i]);
                       }
                   }
                   
               }
               else 
               {
                   passLowerBool = true;
                   alert("Your password will contain only lower case characters.");
                   {
                       for (i=0; len = passLower.length, i<len; i++ )
                       {
                           passArray.push(passLower[i]);
                       }
                   }
                   
               }
               console.log(passLenVal + " Len"); 
               console.log(passSpecBool + " spec"); 
               console.log(passNumberBool + " num"); 
               console.log(passUpperBool + " up"); 
               console.log(passLowerBool + " low");
               
               for (i=0; i<passLenVal; i++ ) 
               {
                   x = getRndInteger(0, passArray.length-1);
                   randPass.push(passArray[x]);
                   console.log(passArray[x] + " random");
               }
               for (i=0; i<randPass.length; i++)
               {
                   passWord += randPass[i];
                   console.log(passWord + " " + i );
               }
               document.getElementById("copy").style.enableBackground = true;
               document.getElementById("textArea").value = passWord; 
           }
       }  
   } 
   function clipBoard ()
   {
           var copyText = document.getElementById("textArea");
           copyText.select();
           copyText.setSelectionRange(0, 99999);
           document.execCommand("copy");
           alert("Copied to your clipboard: " + copyText.value);
       
   }
   function clearPassword()
   {
       passWord = "Your Password";
       document.getElementById("textArea").value = passWord; 

   }                   
   function getRndInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
   }
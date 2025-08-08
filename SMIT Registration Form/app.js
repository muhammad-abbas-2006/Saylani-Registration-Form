const supabaseUrl = 'https://grdpokfywpqvporuxfry.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZHBva2Z5d3BxdnBvcnV4ZnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzODc3NTEsImV4cCI6MjA2OTk2Mzc1MX0.vMX2To9Sa3ltrlnyOOZ_DGAO-tMhVumX08qiEQ2k6P8'
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)

// Student Portal work start

document.getElementById('student-portal').addEventListener('click',()=>{
    window.open('https://student.saylaniwelfare.com/')
})

// Navbar Button work start

document.querySelector('#registration').addEventListener('click',()=>{
    window.open('index.html','_self')
})
document.querySelector('#id-card').addEventListener('click',()=>{
    window.open('IdCard.html','_self')
})
document.querySelector('#check-result').addEventListener('click',()=>{
    window.open('Result.html','_self')
})

document.querySelector('#Submit-btn').addEventListener('click', async() => {
    let country = document.querySelector('#S-country').value.trim();
    let city = document.querySelector('#S-city').value.trim();
    let course = document.querySelector('#S-course').value.trim();
    let computerPro = document.querySelector('#S-pro').value.trim();
    let fullName = document.querySelector('#name').value.trim();
    let email = document.querySelector('#email').value.trim();
    let studentCnic = document.querySelector('#student-cnic').value.trim();
    let fatherCnic = document.querySelector('#father-cnic').value.trim();
    let dob = document.querySelector('#dob').value.trim();
    let gender = document.querySelector('#S-gender').value.trim();
    let address = document.querySelector('#address').value.trim();
    let qualification = document.querySelector('#S-qualification').value.trim();
    let laptop = document.querySelector('#S-laptop').value.trim();
    let picture = document.querySelector('#image').value.trim();

    // Select boxes ke liye special check
    if (
        country === 'Select Country' || city === 'Select City' || course === 'Select Course' || computerPro === 'Select Option' || gender === 'Select Gender' || qualification === 'Last qualification' ||
        laptop === 'Select Option' || fullName === '' || email === '' || studentCnic === '' || fatherCnic === '' || dob === '' || address === '' || picture === ''){

        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Fill Out all given requirements",
        footer: '<a href="#">Why do I have this issue?</a>'})}
    
   else {
   const { error } = await supabase
  .from('userData')
  .insert({name: fullName, email : email, country : country, course : course , studentCNIC : studentCnic , gender : gender, address : address})
  if(error){
  console.log('error',error)
  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
})}

else{
  Swal.fire({
  title: "Your form has submitted successfully",
  icon: "success",
  draggable: true
});
}

}

});

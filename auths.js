async function register() {

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const companyId = document.getElementById("companyId").value;

  try {

    const result = await auth.createUserWithEmailAndPassword(email, password);

    const user = result.user;

    await db.collection("users").doc(user.uid).set({
      nama: nama,
      email: email,
      role: "staff",
      companyId: companyId,
      status: "aktif"
    });

    alert("Register berhasil");

    window.location.href = "login.html";

  } catch(error) {
    alert(error.message);
  }
}

async function login() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {

    const result = await auth.signInWithEmailAndPassword(email, password);

    const user = result.user;

    const doc = await db.collection("users").doc(user.uid).get();

    const data = doc.data();

    if(data.role === "owner") {
      window.location.href = "dashboard-owner.html";
    }

    else if(data.role === "admin") {
      window.location.href = "dashboard-admin.html";
    }

    else {
      window.location.href = "dashboard-staff.html";
    }

  } catch(error) {
    alert(error.message);
  }
}

function forgotPassword() {

  const email = document.getElementById("email").value;

  auth.sendPasswordResetEmail(email)
  .then(() => {
    alert("Link reset password dikirim");
  })
  .catch((error) => {
    alert(error.message);
  });
}

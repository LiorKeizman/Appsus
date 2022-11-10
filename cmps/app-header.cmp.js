export default {
	template: `
        <header class="app-header">
            <!-- <div class="logo"><h1>AppSus</h1></div> -->
            <input type="image" class="logo" id="image" alt="Login"
            src="assets/img/logo.png">
            <nav class="main-nav">
                <section>
                    <router-link to="/"  class="hover">Home</router-link> | 
                    <router-link to="/about" class="hover">About</router-link> | 
                    <router-link to="/email" class="hover">Email</router-link> | 
                    <router-link to="/keep" class="hover">Keep</router-link> | 
                </section>
            </nav>
        </header>
    `,
}

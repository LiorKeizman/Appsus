export default {
	template: `
        <header class="app-header flex">
        <router-link to="/">
            <input type="image" class="logo" id="image" alt="Login"
            src="apps/mail/imgs/1111.jpg">
        </router-link> 

            <nav>
                <router-link to="/">Home</router-link> | 
                <router-link to="/about">About</router-link> | 
                <router-link to="/email">Email</router-link> | 
                <router-link to="/keep">Keep</router-link> | 
            </nav>
        </header>
    `,
}

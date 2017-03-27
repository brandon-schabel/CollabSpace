import Vue from 'vue' {
    {# if_eq lintConfig "airbnb" } }; {
    {
        /if_eq}}
        import Dashboard from '@/components/Dashboard' {
            {# if_eq lintConfig "airbnb" } }; {
            {
                /if_eq}}

                describe('Dashboard.vue', () => {
                            it('should render correct contents', () => {
                                        const Constructor = Vue.extend(Dashboard) {
                                            {# if_eq lintConfig "airbnb" } }; {
                                            {
                                                /if_eq}}
                                                const vm = new Constructor().$mount() {
                                                    {# if_eq lintConfig "airbnb" } }; {
                                                    {
                                                        /if_eq}}
                                                        expect(vm.$el.querySelector('.dashboard h1').textContent)
                                                            .to.equal('Welcome to Your Vue.js App') {
                                                                {# if_eq lintConfig "airbnb" } }; {
                                                        {
                                                            /if_eq}}
                                                        }) {
                                                            {# if_eq lintConfig "airbnb" } }; {
                                                        {
                                                            /if_eq}}
                                                        }) {
                                                            {# if_eq lintConfig "airbnb" } }; {
                                                            {
                                                                /if_eq}}
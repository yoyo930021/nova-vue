module.exports = {
    plugins: ['nova'],
    extends: ['eslint:recommended'],
    env: {
        commonjs: true,
        es6: true,
        node: true,
        'nova/nova': true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
}

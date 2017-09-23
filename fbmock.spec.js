function MyAuth(authService) {
    this.authService = authService

    this.signInWithFacebook = (phone, password) => {
        let fbUserObject = this.authService(phone, password)
        return fbUserObject
        // return { name: 'Sontaya', facebookId: '1234567890', email: 'Sontaya@gmail.com'}
    }
}

test('signInWhitFacebook with valid credential should pass', () => {
    const facebookAuth = jest.fn('0817777788', 'abc12345').mockReturnValue({ name: 'Sontaya', facebookId: '1234567890', email: 'Sontaya@gmail.com'})

    let app = new MyAuth(facebookAuth)
    let phone = '0817777788'
    let password = 'abc12345'
    let value = app.signInWithFacebook(phone, password)

    expect(value).toEqual({ name: 'Sontaya', facebookId: '1234567890', email: 'Sontaya@gmail.com'})
    expect(facebookAuth).toBeCalled()   //ดูว่า facebook มีการเรียกใช้
    expect(facebookAuth).toBeCalledWith('0817777788', 'abc12345')   //ดูว่าถ้ามีการเปลี่ยน phone with password จะไม่ตรงกับที่ตรวจสอบไว้
    //เมื่อเราต้องเรียกใช้ของคนอื่นอันนี้จะช่วยได้
})

const Joi = require('joi');

const userLoginValidate = Joi.object({
    email: Joi
        .string()
        .required()
        .email()
        .messages({
            'string.base': `Email için bir metin giriniz!`,
            'email.base': `Email adresi giriniz!`,
            'string.empty': `Email boş bırakılamaz!`,
            'string.min': `Email minimum {#limit} karakter içermelidir!`,
            'any.required': `Email girilmesi zorunludur!`
        }),
    password: Joi
        .string()
        .required()
        .messages({
            'string.base': `Şifre alanını boş bırakmayınız!`,
            'string.empty': `Şifre boş bırakılamaz!`,
            'any.required': `Şifre girilmesi zorunludur!`
        }),

})

module.exports = userLoginValidate;

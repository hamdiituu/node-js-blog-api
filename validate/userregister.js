const Joi = require('joi');

const todoValidate = Joi.object({
    name: Joi
        .string()
        .min(3)
        .required()
        .messages({
            'string.base': `Isim için bir metin giriniz!`,
            'string.empty': `Isim boş bırakılamaz!`,
            'string.min': `Isim minimum {#limit} karakter içermelidir!`,
            'any.required': `Isim girilmesi zorunludur!`
        }),
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
        .min(8)
        .messages({
            'string.base': `Güçlü bir giriniz!`,
            'string.empty': `Şifre boş bırakılamaz!`,
            'string.min': `Şifre minimum {#limit} karakter içermelidir!`,
            'any.required': `Şifre girilmesi zorunludur!`
        }),

})

module.exports = todoValidate;

const Joi = require('joi');

const todoValidate = Joi.object({
    title: Joi
        .string()
        .min(3)
        .required()
        .messages({
            'string.base': `Başlık için bir metin giriniz!`,
            'string.empty': `Başlık boş bırakılamaz!`,
            'string.min': `Başlık minimum {#limit} karakter içermelidir!`,
            'any.required': `Başlık girilmesi zorunludur!`
        }),

    description: Joi
        .string()
        .min(5)
        .required()
        .messages({
            'string.base': `Açıklama için bir metin giriniz!`,
            'string.empty': `Açıklama boş bırakılamaz!`,
            'string.min': `Açıklama minimum {#limit} karakter içermelidir!`,
            'any.required': `Açıklama girilmesi zorunludur!`
        }),

    done: Joi
        .boolean()
        .messages({
            'boolean.base': `Tamamlandı için true - false girişi yapınız!`
        }),
})

module.exports = todoValidate;

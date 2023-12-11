from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from transformers import AutoModelForSeq2SeqLM
from indobenchmark import IndoNLGTokenizer

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

TOKENIZER_NAME = "indobenchmark/indobart-v2"
MODEL_NAME = "Mikask/indobart-indonlg-nusax-500-jv-id"
LANG_TOKEN = '[javanese]'
DECODER_LANG_TOKEN = '[javanese]'

tokenizer = IndoNLGTokenizer.from_pretrained(TOKENIZER_NAME)
model = AutoModelForSeq2SeqLM.from_pretrained(MODEL_NAME)


@app.get("/translate")
async def translate(text: str):
    """
    This function takes a text string as input, translates it using a pretrained model,
    and returns the translated text.
    """
    try:
        encoded_text = text.encode('utf-8')
        decoded_text = encoded_text.decode('utf-8')

        inputs = tokenizer.prepare_input_for_generation([decoded_text], return_tensors='pt',
                                                        lang_token=LANG_TOKEN, decoder_lang_token=DECODER_LANG_TOKEN)

        translated_tokens = model.generate(
            **inputs, max_length=inputs['input_ids'].shape[1] + 1)

        result = tokenizer.decode(
            translated_tokens[0], skip_special_tokens=True).strip()

        return {"translation": result}
    except:
        print(e)  # print the exception for debugging purposes
        raise HTTPException(status_code=500, detail="Internal Server Error")

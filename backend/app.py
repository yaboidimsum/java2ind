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

tokenizer = IndoNLGTokenizer.from_pretrained('indobenchmark/indobart-v2')
model = AutoModelForSeq2SeqLM.from_pretrained(
    "Mikask/indobart-indonlg-nusax-500-jv-id")


@app.get("/translate")
async def translate(text: str):
    try:
        encoded_text = text.encode('utf-8')
        decoded_text = encoded_text.decode('utf-8')

        inputs = tokenizer.prepare_input_for_generation([decoded_text], return_tensors='pt',
                                                        lang_token='[javanese]', decoder_lang_token='[javanese]')

        translated_tokens = model.generate(
            **inputs, max_length=inputs['input_ids'].shape[1] + 1)

        result = tokenizer.decode(
            translated_tokens[0], skip_special_tokens=True).strip()

        return {"translation": result}
    except Exception:
        raise HTTPException(status_code=500, detail="Something went wrong")

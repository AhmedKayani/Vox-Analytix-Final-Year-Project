from flask import Flask, request, jsonify
from flask import Flask, request, jsonify
from hume import HumeBatchClient
from hume.models.config import ProsodyConfig
import json

app = Flask(__name__)

# Configure your Hume API Key here
# Sami's API Key
# HUME_API_KEY = "OXbX3R5a5LREAmMyhtzzGHalqQsjMNBRyYylykJDRBClmPqL"

# Faizan's API Key
# HUME_API_KEY = "Mzj1N5sW4Ss8RKll2q9WaGgWJ7K5rwbVUzIMRpo2Qm9ILn8E"

# My API Key
# HUME_API_KEY = "1sGimf7Z76yJaOyQ8i9Fk6gIFp2Y6GQnkkO7ok81WFzQNKcf"

# My API Key 2
HUME_API_KEY = "pzzjXShj4CFRCd2mzFjoAM2Mdq5cGyYuRyGGHR3CJE4tSBsr"

def process_mp3(file_path):
    try:
        # Initialize the Hume client
        client = HumeBatchClient(HUME_API_KEY)

        # Define the Hume config for processing the MP3 file
        config = ProsodyConfig()

        # Submit the MP3 file to Hume for processing
        urls = [file_path]  # Provide the file path as a URL
        job = client.submit_job(urls, [config])

        # Wait for the job to complete
        job.await_complete()

        # Download the predictions
        job.download_predictions("predictions.json")

        with open("predictions.json", "r") as file:
            predictions = json.load(file)

        return predictions

    except Exception as e:
        return {'message': f'Error processing file: {str(e)}'}


@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        
        data = request.json
        url = data.get('url', '')    
        result = process_mp3(str(url))

        return jsonify(result)
        # return jsonify(url)

    except Exception as e:
        return jsonify({'message': f'Error: {str(e)}'})

if __name__ == '__main__':
    app.run(debug=True)







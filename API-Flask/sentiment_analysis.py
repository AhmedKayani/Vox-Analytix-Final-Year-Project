from flask import Flask, request, jsonify
from flask import Flask, request, jsonify
from hume import HumeBatchClient
from hume.models.config import ProsodyConfig
import json

app = Flask(__name__)

# Configure your Hume API Key here

# My API Key 1
HUME_API_KEY = "U38KYqQ8h6XbWtsjMrENApPYJlpRTjEkg1bkG0qV6mj3ygi3"

# My API Key 2 (Backup)
# HUME_API_KEY = "6VTGHfQAb9GGBr25WzBALuA3sHzKfQ4IGGo217xuNZ3q1Ecn"

# My API Key 3
# HUME_API_KEY = "pzzjXShj4CFRCd2mzFjoAM2Mdq5cGyYuRyGGHR3CJE4tSBsr"

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







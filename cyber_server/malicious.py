import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
import joblib



# Load the vectorizer and model
# vectorizer = pickle.load(open('vectorizer2.pkl', 'rb'))
vectorizer = joblib.load('vectorizer2.pkl')
model = pickle.load(open('model.pkl', 'rb'))

# Use the loaded vectorizer and model for prediction
def predict(url):
    # Vectorize the input URL
    url_vector = vectorizer.transform([url])
  
    # Make the prediction
    prediction = model.predict(url_vector)
  
    return prediction

# Test the predict function
predictions = predict('diaryofagameaddict.com')
print(predictions)

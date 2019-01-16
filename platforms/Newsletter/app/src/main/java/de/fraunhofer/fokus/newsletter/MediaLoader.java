package de.fraunhofer.fokus.newsletter;

import android.os.AsyncTask;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

/**
 * Created by cba on 23.03.18.
 */

public class MediaLoader extends AsyncTask<URL, Void, JSONArray> {

    private final static String TAG = MediaLoader.class.getSimpleName();

    @Override
    protected JSONArray doInBackground(URL... urls) {
        JSONArray array = null;

        try {
            URL url = urls[0];
            Log.d(TAG, "Sending 'GET' request to fetch media content. URL: " + url);

            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");

            int responseCode = con.getResponseCode();
            if (responseCode != 200) {
                throw new IOException("Error requesting media.json file. Server send: " + responseCode);
            }
            Log.d(TAG, "Response Code : " + responseCode);
            BufferedReader in = new BufferedReader(
                    new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer json = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                json.append(inputLine);
            }
            in.close();

            array = new JSONArray(json.toString());

        } catch (MalformedURLException e) {
            Log.e(TAG, e.getLocalizedMessage());
        } catch (IOException e) {
            Log.e(TAG, e.getLocalizedMessage());
        } catch (JSONException e) {
            Log.e(TAG, e.getLocalizedMessage());
        }
        return array;
    }
}

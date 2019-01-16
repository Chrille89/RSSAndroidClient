package de.fraunhofer.fokus.newsletter;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.webkit.WebView;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.GridView;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private final String baseUrl = "http://gondor.selfhost.eu:8080";
    private static final String TAG = MainActivity.class.getSimpleName();
    private TextView mTextMessage;
    private GridView gridView;
    private List<String> objects = null;
    private JSONArray mediaContentJSONArray = null;

    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            switch (item.getItemId()) {
                case R.id.navigation_dashboard:
                    getNewsByEndpoint("/golemnews");
                    return true;
                case R.id.navigation_notifications:
                    getNewsByEndpoint("/tagesschaunews");
                    return true;
            }
            return false;
        }
    };


    private void getNewsByEndpoint(String endPoint) {
        try {
            MediaLoader mediaLoader = new MediaLoader();
            mediaLoader.execute(new URL(baseUrl + endPoint));
            mediaContentJSONArray = mediaLoader.get();

            objects = new ArrayList<>();

            for (int i = 0; i < mediaContentJSONArray.length(); i++) {
                objects.add(mediaContentJSONArray.getJSONObject(i).getString("title"));
            }
        } catch (Exception e) {
            Log.e(TAG, e.getLocalizedMessage());
        }

        ListAdapter listAdapter = new ArrayAdapter<String>(MainActivity.this, android.R.layout.simple_list_item_1, objects);
        gridView = (GridView) findViewById(R.id.grid);
        gridView.setAdapter(listAdapter);

        final JSONArray array = mediaContentJSONArray;
        gridView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {

                try {
                    JSONObject object = (JSONObject) array.get(position);
                    Intent i = new Intent(Intent.ACTION_VIEW);
                    String url = object.getString("link");
                    i.setData(Uri.parse(url));
                    startActivity(i);
                } catch (Exception e) {
                    Log.e(TAG, e.getLocalizedMessage());
                }
            }
        });
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.d(TAG,"onCreate()");
        setContentView(R.layout.activity_main);

        mTextMessage = (TextView) findViewById(R.id.message);
        BottomNavigationView navigation = (BottomNavigationView) findViewById(R.id.navigation);
        navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);
        getNewsByEndpoint("/golemnews");
    }

    @Override
    protected void onStart() {
        Log.d(TAG,"onStart()");
        super.onStart();
    }

    @Override
    protected void onStop() {
        Log.d(TAG,"onStop()");
        super.onStop();
    }

    @Override
    protected void onDestroy() {
        Log.d(TAG,"onDestroy()");

        super.onDestroy();
    }

    @Override
    protected void onPause() {
        Log.d(TAG,"onPause()");
        super.onPause();
    }

    @Override
    protected void onResume() {
        Log.d(TAG,"onResume");
        super.onResume();
    }

    @Override
    protected void onRestart() {
        Log.d(TAG,"onRestart()");
        super.onRestart();
    }
}

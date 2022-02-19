<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
Use Session;
use App\Http\Controllers\HomeController;
class SpotifyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
        //atributos
        private $clientId;
        private $clientSecret;
        private $redirectUri = 'http://127.0.0.1:8000/spotify-auth';
      
        //funcion constructora
    
        public function __construct(){
            $this->clientId = config('spotify.clientId');
            $this->clientSecret = config('spotify.clientSecret');   
        }
    
    
        //Envia la peticion a spotify para loguearse. 
        public function index()
        {
            $scopes = 'user-read-private user-read-email';
            $url = 'https://accounts.spotify.com/authorize' .
                                '?response_type=code' .
                                '&client_id=' . $this->clientId .
                                ($scopes ? '&scope=' . urlencode($scopes) : '') .
                                '&redirect_uri=' . urlencode($this->redirectUri);
            return response()->json(['url' =>$url, 'status'=>200]);
        }
        
        //Crea un token de autorizacion para acceder a la data del usuario.
        public function getToken($code){
            $response = Http::withHeaders([
                'Authorization' => 'Basic ' . base64_encode($this->clientId . ':' . $this->clientSecret)            
                ])->asForm()
                ->post('https://accounts.spotify.com/api/token', [
                'code' => trim($code),
                'redirect_uri' => $this->redirectUri,
                'grant_type' => 'authorization_code',
            ]);
            return $response->json()['access_token'];
        }
        // Obtiene la data de spotify y crea las variables de session para el usuario. 
        public function buildUser($profile){
                $name = $profile['display_name'];
                $country = $profile['country'];
                $email = $profile['email'];
                $followers = $profile['followers']['total'];
                $href = $profile['href'];
                $id = $profile['id'];
                $image = $profile['images'][0]['url'];
                $user = ['name'=>$name,'country'=>$country,'email'=>$email,'followers'=>$followers,'href'=>$href,'id'=>$id,'image'=>$image];
                Session::put('user',$user);
              
        }
        public function profile()
        {
            return redirect()->route('login');
        }
        public function returnauthUrl(){
             $code = $_GET['code'];
             $token = $this->getToken($code);
             Session::put('token',$token);
             $profile = Http::withHeaders([
                'Authorization' => 'Bearer ' . $token])
                ->get('https://api.spotify.com/v1/me');
            $user =  $this->buildUser($profile);
            return redirect('/profile');
        }
    
        /**
         * Show the form for creating a new resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function create()
        {
            //
        }
    
        /**
         * Store a newly created resource in storage.
         *
         * @param  \Illuminate\Http\Request  $request
         * @return \Illuminate\Http\Response
         */
        public function store(Request $request)
        {
            //
        }
    
        /**
         * Display the specified resource.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function show($id)
        {
            //
        }
    
        /**
         * Show the form for editing the specified resource.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function edit($id)
        {
            //
        }
    
        /**
         * Update the specified resource in storage.
         *
         * @param  \Illuminate\Http\Request  $request
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function update(Request $request, $id)
        {
            //
        }
    
        /**
         * Remove the specified resource from storage.
         *
         * @param  int  $id
         * @return \Illuminate\Http\Response
         */
        public function destroy($id)
        {
            //
        }
    
}

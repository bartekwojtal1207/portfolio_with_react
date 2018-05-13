@extends('layouts.app')

@section('content')

    <section class="welcome">
        <div id="particles-js">
        </div>
        <div class="container">
            <div class="row" id="message-container"></div>
            <div class="row welcome-container">
                <a class="welcome-button" href="{{ route('mainpage') }}">zapraszam</a>
            </div>
        </div>

    </section>


@endsection
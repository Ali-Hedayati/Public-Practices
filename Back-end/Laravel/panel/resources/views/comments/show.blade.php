@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Comment Details</h1>
    <p><strong>ID:</strong> {{ $comment->id }}</p>
    <p><strong>User:</strong> {{ $comment->user->name ?? 'N/A' }}</p>
    <p><strong>Admin:</strong> {{ $comment->admin->name ?? 'Admin' }}</p>
    <p><strong>Comment:</strong> {{ $comment->comment_text }}</p>
    <a href="{{ route('comments.index') }}" class="btn btn-primary">Back to Comments</a>
</div>
@endsection

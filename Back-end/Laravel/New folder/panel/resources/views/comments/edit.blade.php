@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Edit Comment</h1>

    {{-- Validation errors --}}
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    {{-- Edit form --}}
    <form action="{{ route('comments.update', $comment->id) }}" method="POST">
        @csrf
        @method('PUT')

        <div class="mb-3">
            <label for="comment_text" class="form-label">Comment Text</label>
            <textarea name="comment_text" id="comment_text" class="form-control" rows="3" required>{{ $comment->comment_text }}</textarea>
        </div>

        <button type="submit" class="btn btn-success">Update Comment</button>
        <a href="{{ route('comments.index') }}" class="btn btn-secondary">Cancel</a>
    </form>
</div>
@endsection

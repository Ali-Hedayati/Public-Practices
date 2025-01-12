@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Comments</h1>


    {{-- Add new comment button --}}
    <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#addCommentModal">
        Add New Comment
    </button>

    <!-- Add Comment Modal -->
<div class="modal fade" id="addCommentModal" tabindex="-1" aria-labelledby="addCommentModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addCommentModalLabel">Add New Comment</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="{{ route('comments.store') }}" method="POST">
                    @csrf
                    <div class="mb-3">
                        <label for="user_id" class="form-label">User ID</label>
                        <input type="number" name="user_id" id="user_id" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="comment_text" class="form-label">Comment Text</label>
                        <textarea name="comment_text" id="comment_text" class="form-control" rows="3" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>


    {{-- Comments table --}}
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>User</th>
                <th>Admin</th>
                <th>Comment</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($comments as $comment)
            <tr>
                <td>{{ $comment->id }}</td>
                <td>{{ $comment->user->name ?? 'N/A' }}</td>
                <td>{{ $comment->admin->name ?? 'Admin' }}</td>
                <td>{{ $comment->comment_text }}</td>
                <td>
                    <a href="{{ route('comments.show', $comment->id) }}" class="btn btn-info btn-sm">View</a>
                    <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editCommentModal{{ $comment->id }}">Edit</button>
                    <form action="{{ route('comments.destroy', $comment->id) }}" method="POST" style="display: inline;">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this comment?')">Delete</button>
                    </form>
                </td>
            </tr>

            {{-- Modal for Editing --}}
            <div class="modal fade" id="editCommentModal{{ $comment->id }}" tabindex="-1" aria-labelledby="editCommentModalLabel{{ $comment->id }}" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editCommentModalLabel{{ $comment->id }}">Edit Comment</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="{{ route('comments.update', $comment->id) }}" method="POST">
                                @csrf
                                @method('PUT')
                                <div class="mb-3">
                                    <label for="comment_text_{{ $comment->id }}" class="form-label">Comment Text</label>
                                    <textarea name="comment_text" id="comment_text_{{ $comment->id }}" class="form-control" rows="3" required>{{ $comment->comment_text }}</textarea>
                                </div>
                                <button type="submit" class="btn btn-success">Update Comment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach


<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'comment_text' => 'required|string|max:255',
        ]);

        $comment = Comment::create([
            'user_id' => $validated['user_id'],
            'admin_id' => 1, // Default admin ID
            'comment_text' => $validated['comment_text'],
        ]);

        return redirect()->route('comments.index')->with('success', 'Comment created successfully');
    }

    public function show($id)
    {

        $comment = Comment::findOrFail($id);
        dd( $comment);
        return view('comments.show', ['comment' => $comment]);
    }

    public function update(Request $request, $id)
    {

        $validated = $request->validate([
            'comment_text' => 'required|string|max:255',
        ]);

        $comment = Comment::findOrFail($id);
        $comment->update(['comment_text' => $validated['comment_text']]);

        return redirect()->route('comments.index')->with('success', 'Comment updated successfully');
    }

    public function destroy($id)
    {

        $comment = Comment::findOrFail($id);
        $comment->delete();

        return redirect()->route('comments.index')->with('success', 'Comment deleted successfully');
    }

    public function index(Request $request)
    {
        $query = Comment::with('user', 'admin');

        if ($request->has('user_id')) {
            $query->where('user_id', $request->user_id);
        }

        $comments = $query->get();

        return view('comments.index', ['comments' => $comments]);
    }
}
